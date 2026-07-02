import { resume } from '../data/resume'
import { Section } from './Section'
import { TechTag } from './TechTag'

/** The main work-history timeline. */
export function Experience() {
  return (
    <Section title="Experience">
      <div className="space-y-8">
        {resume.experience.map((job, i) => (
          <article
            key={`${job.company}-${job.period}-${i}`}
            className="border-l-2 border-slate-200 pl-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="font-serif text-lg font-bold text-slate-900">
                {job.role}
              </h3>
              <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                {job.period}
              </span>
            </div>
            <p className="text-sm font-semibold text-tiger_orange-500">
              {job.company}
              <span className="text-slate-400"> — {job.location}</span>
            </p>

            {job.summary && (
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {job.summary}
              </p>
            )}

            {job.highlights && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 marker:text-amber_flame-500">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {job.technologies && (
              <div className="mt-3 flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <TechTag key={tech} label={tech} />
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
