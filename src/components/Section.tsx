import type { ReactNode } from 'react'

interface SectionProps {
  title: string
  children: ReactNode
}

/** A titled content block with a consistent brand-coloured heading. */
export function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-indigo_velvet-500">
        {title}
      </h2>
      {children}
    </section>
  )
}
