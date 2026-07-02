import { resume } from '../data/resume'
import { Section } from './Section'

/** Sidebar list of panels and talks, linking out where available. */
export function Talks() {
  return (
    <Section title="Panels & Talks">
      <ul className="space-y-4">
        {resume.talks.map((talk) => (
          <li key={`${talk.event}-${talk.date}`}>
            <p className="text-sm font-semibold text-slate-800">{talk.event}</p>
            <p className="text-sm text-slate-600">{talk.title}</p>
            <p className="text-xs text-slate-400">{talk.date}</p>
            {talk.url && (
              <a
                href={talk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-cayenne_red-500 underline decoration-cayenne_red-800 underline-offset-2 hover:text-cayenne_red-400"
              >
                View link
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}
