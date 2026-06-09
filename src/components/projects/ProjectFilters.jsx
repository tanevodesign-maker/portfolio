import { motion } from 'framer-motion'
import { CATEGORIES } from '../../data/projects.js'

/**
 * Category filter tabs (top-right of the Projects section).
 * Segmented-control / tab style: a shared track with a white pill that
 * slides to the active tab. Controlled component: parent owns the `active` id.
 */
export default function ProjectFilters({ active, onChange }) {
  return (
    <div className="inline-flex flex-wrap items-center gap-1 rounded-2xl bg-neutral-100 p-1">
      {CATEGORIES.map((cat) => {
        const isActive = cat.id === active
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            aria-pressed={isActive}
            className="relative rounded-xl px-4 py-1.5 text-sm font-medium transition-colors"
          >
            {/* Active tab indicator that slides between options */}
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-xl bg-white shadow-sm ring-1 ring-black/[0.04]"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors ${
                isActive ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              {cat.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
