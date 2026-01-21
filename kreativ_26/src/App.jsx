import { useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const containerRef = useRef(null)
  const navRef = useRef(null)
  const kreativRef = useRef(null)
  const collegeRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const btnRef = useRef(null)
  const eventsRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, { y: -60, opacity: 0, duration: 1 })

      gsap.from(kreativRef.current, {
        y: -80,
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
      })

      gsap.from(collegeRef.current, {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
      })

      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.7,
      })

      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 1,
      })

   gsap.from(btnRef.current, {
  scale: 0.9,
  opacity: 0,
  duration: 0.8,
  delay: 1.2,
})

    }, containerRef)

    return () => ctx.revert()
  }, [])

  const scrollToEvents = () => {
    setMenuOpen(false)
    eventsRef.current.scrollIntoView({ behavior: "smooth" })

    gsap.from(".event-card", {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    })
  }

  return (
    <div ref={containerRef} className="w-full overflow-x-hidden">

      {/* NAVBAR */}
      <nav ref={navRef} className="fixed top-0 w-full z-20 bg-black/30 backdrop-blur-md px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">Kreativ’26</h1>

          <ul className="hidden md:flex gap-8 text-white">
            <li className="cursor-pointer hover:text-violet-400" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</li>
            <li className="cursor-pointer hover:text-violet-400" onClick={scrollToEvents}>Events</li>
            <li className="cursor-pointer hover:text-violet-400">Prizes</li>
            <li className="cursor-pointer hover:text-violet-400">Coordinator</li>
          </ul>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-2xl">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <ul className="mt-6 flex flex-col items-center gap-6 text-white md:hidden">
            <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</li>
            <li onClick={scrollToEvents}>Events</li>
            <li>Prizes</li>
            <li>Coordinator</li>
          </ul>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <video className="absolute inset-0 w-full h-full object-cover" src="/bg-video.mp4" autoPlay loop muted />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 px-6 -translate-y-10">
          <h1 ref={kreativRef} className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Kreativ’26
          </h1>

          <h2 ref={collegeRef} className="text-white uppercase tracking-widest mb-5">
            Kamaraj College of Engineering and Technology
          </h2>

          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            National Level <br /> Technical Symposium
          </h1>

          <p ref={subtitleRef} className="mt-6 text-white text-lg">
            Innovate • Collaborate • Elevate
          </p>

          <div
  ref={btnRef}
  className="mt-10 flex flex-wrap gap-6 justify-center"
>
  {/* View Events */}
  <button
    onClick={scrollToEvents}
    className="
      px-10 py-3
      border border-violet-400 text-violet-300
      rounded-full
      hover:bg-violet-400 hover:text-black
      transition
    "
  >
    View Events
  </button>

  {/* Register Now */}
  <a
    href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
    target="_blank"
    rel="noopener noreferrer"
    className="
      px-10 py-3
      rounded-full
      bg-gradient-to-r from-violet-600 to-pink-600
      text-white font-semibold
      hover:scale-105
      transition
      shadow-lg shadow-violet-500/30
    "
  >
    Register Now
  </a>
</div>

        </div>
      </section>

            {/* EVENTS SECTION */}
<section ref={eventsRef} className="relative min-h-screen py-24 px-6">
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/bg-video.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="absolute inset-0 bg-black/85" />

  <div className="relative z-10 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
      Events
    </h2>

    <div className="grid md:grid-cols-2 gap-12">

      {/* TECH EVENT */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/20 p-10 hover:-translate-y-2 transition duration-500">

        {/* Gradient overlay (hover only) */}
        <div className="
          absolute inset-0
          bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        " />

        {/* Content */}
        <div className="relative z-10 text-white">
          <h3 className="text-3xl font-extrabold mb-2">
            Hack Ragnarok
          </h3>

          <p className="text-lg mb-4">
            AI Hackathon
          </p>

          <p className="mb-6">
            Solve real-world AI problems with innovation and teamwork.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/hack-ragnarok-problem-statement.pdf"
              download
              className="
                px-6 py-3
                border border-white
                rounded-lg
                hover:bg-white hover:text-black
                transition
              "
            >
              Download Problem Statement
            </a>

            <a
              href="/hack-ragnarok-ppt-template.pptx"
              download
              className="
                px-6 py-3
                border border-white
                rounded-lg
                hover:bg-white hover:text-black
                transition
              "
            >
              Download PPT Template
            </a>
          </div>
        </div>
      </div>

      {/* NON-TECH EVENT */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/20 p-10 hover:-translate-y-2 transition duration-500">

        {/* Gradient overlay (hover only) */}
        <div className="
          absolute inset-0
          bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        " />

        {/* Content */}
        <div className="relative z-10 text-white">
          <h3 className="text-3xl font-extrabold mb-2">
            Think & Twist
          </h3>

          <p className="text-lg mb-6">
            Non-Technical Event
          </p>

          <ul className="space-y-4">
            <li><strong>Level 1:</strong> Connections</li>
            <li><strong>Level 2:</strong> Identify words using clues</li>
            <li><strong>Level 3:</strong> Logo mismatch challenge</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>


    </div>
  )
}
