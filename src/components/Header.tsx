import { resume } from '../data/resume'

/** Site hero: name, title, summary and the single GitHub contact link. */
export function Header() {
  const githubHandle = resume.github.replace(/^https?:\/\/github\.com\//, '@')

  return (
    <header className="mb-12 border-b border-slate-200 pb-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cayenne_red-500">
        {resume.title}
      </p>
      <h1 className="font-serif text-4xl font-bold text-indigo_velvet-400 sm:text-5xl">
        {resume.name}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
        {resume.summary}
      </p>
      <a
        href={resume.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-indigo_velvet-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo_velvet-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber_flame-500"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
        </svg>
        {githubHandle}
      </a>
    </header>
  )
}
