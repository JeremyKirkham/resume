#!/usr/bin/env bash
# Claude Code PostToolUse hook.
# After Claude edits a TypeScript source file, lint just that file and, if it
# fails, surface the errors back to Claude (exit 2) so they get fixed promptly.
#
# Receives the tool payload as JSON on stdin.

set -euo pipefail

payload="$(cat)"

# Extract the edited file path (node is always available in this project).
file_path="$(printf '%s' "$payload" | node -e '
  let raw = "";
  process.stdin.on("data", (c) => (raw += c));
  process.stdin.on("end", () => {
    try {
      const j = JSON.parse(raw);
      process.stdout.write((j.tool_input && j.tool_input.file_path) || "");
    } catch {
      process.stdout.write("");
    }
  });
')"

# Only act on TypeScript/TSX files inside src/.
case "$file_path" in
  *src/*.ts | *src/*.tsx) ;;
  *) exit 0 ;;
esac

[ -f "$file_path" ] || exit 0

cd "$CLAUDE_PROJECT_DIR" 2>/dev/null || cd "$(dirname "$0")/../.."

# node_modules may not be installed yet (e.g. fresh clone) — skip silently.
[ -x node_modules/.bin/eslint ] || exit 0

if ! output="$(node_modules/.bin/eslint "$file_path" 2>&1)"; then
  echo "ESLint reported problems in $file_path:" >&2
  echo "$output" >&2
  exit 2
fi

exit 0
