import { Link, useParams } from 'react-router-dom'
import { PROJECTS } from '../data/projects.js'

// Placeholder detail page — fleshed out later. Confirms routing works.
export default function ProjectDetail() {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link to="/" className="text-sm text-neutral-500 hover:text-neutral-900">
        ← Back to work
      </Link>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight">
        {project ? project.title : 'Project not found'}
      </h1>
      {project && (
        <p className="mt-2 text-neutral-500">
          {project.year} · {project.role}
        </p>
      )}
    </main>
  )
}
