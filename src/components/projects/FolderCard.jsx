import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const CREAM = '#FAFAF5'

/**
 * A project rendered as a minimal "tag folder" (light mode).
 *
 * The card height is `width − 18px` (padding-top trick), i.e. ~18px shorter
 * than a square — the reduction comes off the TOP (the gradient header). The
 * front flap is a bottom-anchored layer locked to `aspect-[100/66]`, so its
 * pixel height stays the same as before regardless of the shorter card.
 *
 * Layers, back to front (z-0 → z-30):
 *   1. Gradient back  — full-bleed pastel + the white border. PERMANENT.
 *   2. Page           — the project image. Hidden behind the flap at rest; on
 *                       hover it peeks out above the flap (above the border,
 *                       below the flap) like the reference.
 *   3. Front flap     — cream tab + notch (SVG). Nudges down ~14px to "open".
 *   4. Heading + year — heading high on the flap, year small along the bottom.
 */
export default function FolderCard({ project }) {
  const navigate = useNavigate()

  return (
    <motion.button
      type="button"
      onClick={() =>
        project.href
          ? window.open(project.href, '_blank', 'noopener,noreferrer')
          : navigate(`/projects/${project.slug}`)
      }
      initial="rest"
      whileHover="hover"
      animate="rest"
      whileTap={{ scale: 0.99 }}
      variants={{ rest: { y: 0 }, hover: { y: -4 } }}
      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
      aria-label={`Open project ${project.title}`}
      className="group block w-full rounded-xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4 focus-visible:ring-offset-[#FBFBFB]"
    >
      <motion.div
        className="relative w-full aspect-[100/76]"
        variants={{
          rest: { filter: 'drop-shadow(0 8px 22px rgba(0,0,0,0.08))' },
          hover: { filter: 'drop-shadow(0 22px 42px rgba(0,0,0,0.16))' },
        }}
      >
        {/* 1. Gradient back + white border — fixed, clipped */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
          <div
            className="absolute inset-0 rounded-xl ring-4 ring-inset ring-white"
            style={{ background: project.gradient }}
          />
        </div>

        {/* 2. Page — wide, rectangular image. Clipped only at the bottom so it
              can POP OUT above the folder while its hidden body never shows
              below. Its z-index lifts (after a short delay) from behind the flap
              to ON TOP of the whole folder once it has slid up. */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ clipPath: 'inset(-9999px 0 0 0)' }}
          variants={{ rest: { zIndex: 10 }, hover: { zIndex: 40 } }}
          transition={{ zIndex: { delay: 0.18 } }}
        >
          <motion.div
            className="absolute inset-x-[5%] bottom-0 aspect-[4/3] overflow-hidden rounded-lg shadow-[0_16px_34px_-10px_rgba(0,0,0,0.45)]"
            variants={{ rest: { y: 'calc(60% + 20px)' }, hover: { y: 'calc(-50% + 20px)' } }}
            transition={{ type: 'spring', stiffness: 240, damping: 26 }}
          >
            <img
              src={project.cover}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* 3. Front flap — clipped for its bottom corners; nudges down to open */}
        <div className="absolute inset-0 z-20 overflow-hidden rounded-xl">
          <motion.div
            className="absolute inset-x-0 bottom-0 w-full aspect-[100/54]"
            style={{ filter: 'drop-shadow(0 -2px 3px rgba(0,0,0,0.06))' }}
            variants={{ rest: { y: 0 }, hover: { y: 14 } }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          >
            <svg viewBox="0 0 100 54" preserveAspectRatio="none" className="h-full w-full">
              <path
                fill={CREAM}
                d="M 5 0 L 44 0 C 51 0 51 11 58 11 L 92 11 Q 100 11 100 16
                   L 100 54 L 0 54 L 0 4 Q 0 0 5 0 Z"
              />
            </svg>
          </motion.div>
        </div>

        {/* 4. Year (on top) + heading + arrow — static overlay so the bottom
              padding is identical at rest and on hover */}
        <div className="pointer-events-none absolute inset-x-[7%] bottom-[7%] z-30">
            {/* Year — small, sits above the heading */}
            <span className="block text-[16px] font-medium uppercase tracking-wide text-neutral-400">
              {project.year}
            </span>

            {/* Heading + open arrow */}
            <div className="mt-0.5 flex items-end justify-between gap-2">
              <h3 className="line-clamp-2 text-[18px] font-semibold leading-tight text-neutral-900">
                {project.title}
              </h3>

              <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0 text-neutral-900"
                variants={{
                  rest: { opacity: 0, x: -3, y: 3 },
                  hover: { opacity: 1, x: 0, y: 0 },
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                aria-hidden="true"
              >
                <path d="M7 17 L17 7" />
                <path d="M8 7 L17 7 L17 16" />
              </motion.svg>
            </div>
          </div>
      </motion.div>
    </motion.button>
  )
}
