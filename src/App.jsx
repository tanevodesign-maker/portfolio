import ProjectsSection from './components/projects/ProjectsSection.jsx'
import BottomDock from './components/BottomDock.jsx'

export default function App() {
  return (
    <main className="min-h-screen bg-[#FBFBFB] text-neutral-900">
      <ProjectsSection />
      <BottomDock />
    </main>
  )
}
