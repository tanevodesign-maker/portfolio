/**
 * A single floating nav bar, centered at the bottom of the screen.
 * Left → right inside the pill: gradient avatar + "Tanya Das" wordmark,
 * a divider, then Resume + social icons (each with a hover fill).
 */

/** Diagonal "open" arrow — collapsed/hidden at rest, slides open on hover.
    Place inside any element with the `group` class. */
function HoverArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-3.5 w-0 shrink-0 opacity-0 transition-all duration-200 group-hover:ml-1 group-hover:w-3.5 group-hover:opacity-100"
    >
      <path d="M7 17 L17 7" />
      <path d="M8 7 L17 7 L17 16" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px]">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
  )
}

export default function BottomDock() {
  return (
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-2xl border border-black/5 bg-white/80 px-2.5 py-2 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md">
        {/* Name + avatar */}
        <div className="group flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-neutral-100">
          <span className="h-[15px] w-[15px] rounded-full bg-gradient-to-br from-fuchsia-400 via-pink-400 to-amber-300 shadow-sm ring-1 ring-black/5" />
          <span className="text-sm font-semibold text-neutral-800">Tanya Das</span>
          <HoverArrow />
        </div>

        <span className="mx-1 h-5 w-px bg-black/10" />

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
        >
          Resume
          <HoverArrow />
        </a>

        {/* Socials */}
        <a
          href="https://www.linkedin.com/in/designtanya/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="group inline-flex h-9 items-center rounded-lg px-2.5 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
        >
          <LinkedInIcon />
          <HoverArrow />
        </a>

        <a
          href="https://x.com/tanevo_design"
          target="_blank"
          rel="noreferrer"
          aria-label="X"
          className="group inline-flex h-9 items-center rounded-lg px-2.5 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
        >
          <XIcon />
          <HoverArrow />
        </a>

        <a
          href="https://www.behance.net/designtanya"
          target="_blank"
          rel="noreferrer"
          aria-label="Behance"
          className="group inline-flex h-9 items-center rounded-lg px-2.5 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
        >
          <BehanceIcon />
          <HoverArrow />
        </a>
      </div>
    </nav>
  )
}
