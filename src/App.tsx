import { Header } from './components/Header'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { SideProjects } from './components/SideProjects'
import { Talks } from './components/Talks'
import { resume } from './data/resume'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <Header />

        {/* PDF-style layout: wide main column + sidebar on desktop, stacked on mobile. */}
        <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Experience />
            <SideProjects />
          </div>
          <aside className="lg:col-span-1">
            <Skills />
            <Talks />
          </aside>
        </div>

        <footer className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-400">
          {resume.name} · Built with React, Vite &amp; Tailwind CSS.
        </footer>
      </main>
    </div>
  )
}

export default App
