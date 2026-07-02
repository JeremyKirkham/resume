import { resume } from '../data/resume'
import { Section } from './Section'
import { TechTag } from './TechTag'

/** Personal / side project showcase. */
export function SideProjects() {
  return (
    <Section title="Side Projects">
      <div className="space-y-6">
        {resume.sideProjects.map((project) => (
          <article
            key={project.name}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="font-serif text-lg font-bold text-slate-900">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-indigo_velvet-500"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="text-sm font-medium italic text-medium_slate_blue-400">
              {project.tagline}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {project.description}
            </p>
            {project.technologies && (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechTag key={tech} label={tech} />
                ))}
              </div>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-cayenne_red-500 underline decoration-cayenne_red-800 underline-offset-2 hover:text-cayenne_red-400"
              >
                {project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
