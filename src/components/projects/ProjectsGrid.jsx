import { AnimatePresence, motion } from 'framer-motion'
import FolderCard from './FolderCard.jsx'

/**
 * Responsive grid of folders. Animates items in/out as the filter changes.
 */
export default function ProjectsGrid({ projects }) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <FolderCard project={project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}
