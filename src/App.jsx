import './App.css'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#focus', label: 'Focus' },
  { href: '#projects', label: 'Projects' },
  { href: '#community', label: 'Community' },
  { href: '#join', label: 'Join Us' },
]

const focusAreas = [
  'Autonomous Navigation',
  'Tracking & Sensing',
  'Vehicle & Drone Control',
  'Multi-Robot Systems',
]

function App() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <p className="lab-name">DaRC-ARMS Research Lab</p>
        <p className="tagline">Dayton Robotics &amp; Control · Autonomy Robotics and Multiagent Systems</p>
        <nav aria-label="Primary navigation">
          <ul className="link-row">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="org">University of Dayton</p>
      </header>

      <section id="about" className="hero">
        <h1>Robotics, Autonomy, Sensing, and Multiagent Systems</h1>
        <p>
          The DaRC-ARMS Research Lab advances robotics through autonomous navigation,
          intelligent sensing, target tracking, vehicle dynamics, and cooperative
          multi-robot systems.
        </p>
        <p>
          Jointly led by Nicholas M. Stiffler and Krishna B. Kidambi, the lab blends
          theory, experimentation, and student-built systems to solve practical
          problems in motion, perception, and control.
        </p>
        <ul className="link-row ctas">
          <li>
            <a href="#projects">Explore Projects</a>
          </li>
          <li>
            <a href="#join">Join the Lab</a>
          </li>
        </ul>
      </section>

      <section id="focus" className="focus">
        <h2>Our Research Focus</h2>
        <h3>Autonomy, Sensing, and Control in Real Environments</h3>
        <p>
          From autonomous vehicles and quadrotors to pursuit-evasion, distributed
          sensing, and resilient multi-robot teams, DaRC-ARMS treats robotics like an
          ecosystem where perception, planning, dynamics, and control must work in tune.
        </p>
        <ul className="pill-list">
          {focusAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
