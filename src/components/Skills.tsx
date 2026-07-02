import { resume } from '../data/resume'
import { Section } from './Section'

/** Sidebar list of headline skills. */
export function Skills() {
  return (
    <Section title="Skills">
      <ul className="space-y-2">
        {resume.skills.map((skill) => (
          <li
            key={skill}
            className="flex items-center gap-2 text-sm text-slate-700"
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber_flame-500"
              aria-hidden="true"
            />
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  )
}
