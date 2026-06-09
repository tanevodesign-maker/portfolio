import { useMemo, useState } from 'react'
import ProjectFilters from './ProjectFilters.jsx'
import ProjectsGrid from './ProjectsGrid.jsx'
import { PROJECTS, DEFAULT_CATEGORY } from '../../data/projects.js'

/**
 * Owns the active-filter state and derives the visible project list.
 * This is the only stateful piece; the children below are presentational.
 */
export default function ProjectsSection() {
  const [active, setActive] = useState(DEFAULT_CATEGORY)

  const visible = useMemo(
    () => PROJECTS.filter((p) => p.categories.includes(active)),
    [active],
  )

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <header className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-[24px] font-semibold tracking-tight">Tanya's Projects</h2>
        <ProjectFilters active={active} onChange={setActive} />
      </header>

      <ProjectsGrid projects={visible} />
    </section>
  )
}
