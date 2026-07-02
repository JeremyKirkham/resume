interface TechTagProps {
  label: string
}

/** A small pill used to display a technology / tool. */
export function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-block rounded-full bg-indigo_velvet-900 px-3 py-1 text-xs font-medium text-indigo_velvet-400">
      {label}
    </span>
  )
}
