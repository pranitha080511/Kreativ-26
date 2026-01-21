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
  const guidelinesRef = useRef(null)
  const prizesRef = useRef(null)
  const coordinatorRef = useRef(null)


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
      gsap.utils.toArray(".coordinator-card").forEach((card) => {
  const img = card.querySelector(".coordinator-img")

  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      y: -15,
      boxShadow: "0 0 40px rgba(139,92,246,0.8)",
      duration: 0.4,
      ease: "power3.out",
    })

    gsap.to(img, {
      scale: 1.1,
      duration: 0.4,
      ease: "power3.out",
    })
  })

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      y: 0,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.4,
      ease: "power3.out",
    })

    gsap.to(img, {
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    })
  })
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
gsap.utils.toArray(".hover-lift").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      y: -12,
      duration: 0.35,
      ease: "power3.out",
    })
  })

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      y: 0,
      duration: 0.35,
      ease: "power3.out",
    })
  })
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
  const scrollToGuidelines = () => {
    setMenuOpen(false)
    guidelinesRef.current.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToPrizes = () => {
  setMenuOpen(false)
  prizesRef.current.scrollIntoView({ behavior: "smooth" })
}
const scrollToCoordinator = () => {
  setMenuOpen(false) // closes mobile menu
  coordinatorRef.current.scrollIntoView({behavior: "smooth",})
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
            <li className="cursor-pointer hover:text-violet-400" onClick={scrollToGuidelines}>Guidelines</li>
            <li className="cursor-pointer hover:text-violet-400" onClick={scrollToPrizes}>Prizes</li>
            <li className="cursor-pointer hover:text-violet-400" onClick={scrollToCoordinator}>Coordinator</li>
          </ul>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-2xl">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <ul className="mt-6 flex flex-col items-center gap-6 text-white md:hidden">
            <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</li>
            <li onClick={scrollToEvents}>Events</li>
            <li onClick={scrollToGuidelines}>Guidelines</li>
            <li onClick={scrollToPrizes} >Prizes</li>
            <li onClick={scrollToCoordinator}>Coordinator</li>
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
  className="mt-10 flex flex-col items-center gap-6"
>
  {/* Top buttons */}
  <div className="flex flex-wrap gap-6 justify-center">
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

  {/* Download Rules Book (CENTERED BELOW) */}
  <a
    href="/KREATIV 2026 – SYMPOSIUM RULE BOOK (TRACK A).pdf"
    download
    className="
      px-8 py-3
      rounded-full
      border border-white/30
      text-white
      hover:bg-white hover:text-black
      transition
      backdrop-blur-md
    "
  >
    Download Rules Book
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
              href="/Problem statements.pdf"
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
              href="/HackRagnarok.pptx"
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
{/* GUIDELINES SECTION */}
<section ref={guidelinesRef} className="relative min-h-screen py-24 px-6">

  {/* Background video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/bg-video.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="absolute inset-0 bg-black/85" />

  <div className="relative z-10 max-w-7xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
      Guidelines
    </h2>

    {/* ================= DESKTOP TIMELINE ONLY ================= */}
    <div className="hidden md:block relative mb-24">

      {/* Gradient Line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full" />

      {/* Timeline Items */}
      <div className="grid grid-cols-6 gap-6 text-center relative">

        {[
          ["9:30 – 10:00", "Orientation"],
          ["10:00 – 10:30", "Refreshments"],
          ["10:30 – 1:00", "Hackathon (Project Evaluation)"],
          ["1:00 – 2:00", "Lunch Break"],
          ["2:00 – 3:00", "Non-Tech Events"],
          ["3:00 – 4:30", "Prize Distribution"],
        ].map(([time, activity], index) => (
          <div key={index} className="flex flex-col items-center">

            {/* Time */}
            <div className="mb-6 font-semibold text-violet-300">
              {time}
            </div>

            {/* Dot */}
            <div
              className="
                relative z-10
                w-5 h-5
                rounded-full
                bg-white
                border-4 border-violet-500
                shadow-lg shadow-violet-500/50
                transition-transform duration-300
                hover:scale-125
              "
            />

            {/* Activity */}
            <div className="mt-6 text-white font-medium max-w-[140px]">
              {activity}
            </div>

          </div>
        ))}
      </div>
    </div>

    {/* ================= MOBILE TIMELINE ONLY ================= */}
    <div className="block md:hidden space-y-6 mb-24">

      {[
        ["9:30 – 10:00", "Orientation"],
        ["10:00 – 10:30", "Refreshments"],
        ["10:30 – 1:00", "Hackathon (Project Evaluation)"],
        ["1:00 – 2:00", "Lunch Break"],
        ["2:00 – 3:00", "Non-Tech Events"],
        ["3:00 – 4:30", "Prize Distribution"],
      ].map(([time, activity], index) => (
        <div
          key={index}
          className="group relative overflow-hidden p-5 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md"
        >
          {/* Gradient hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition" />

          <div className="relative z-10">
            <div className="text-violet-300 font-semibold mb-1">
              {time}
            </div>
            <div className="text-white font-medium">
              {activity}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* ================= GUIDELINES DETAILS ================= */}
    <div className="relative mt-28">

      {/* Center Gradient Line (Desktop only) */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-violet-500 via-purple-500 to-pink-500 -translate-x-1/2 hidden md:block" />

      <div className="grid md:grid-cols-2 gap-16">

        {/* AI HACKATHON */}
        <div className="text-white md:pr-12">
          <h3 className="text-2xl font-bold mb-6 text-violet-300">
            AI Hackathon – Guidelines
          </h3>

          <ul className="space-y-4 list-decimal list-inside text-gray-200">
            <li>Confirm your registration by paying the fees.</li>
            <li>Select your domain from the problem statements provided.</li>
            <li>Download the PPT template provided for presentation.</li>
            <li>During registration, submit your prepared PPT.</li>
            <li>Attend the hackathon on the time mentioned in the brochure.</li>
          </ul>
        </div>

        {/* NON-TECH */}
        <div className="text-white md:pl-12">
          <h3 className="text-2xl font-bold mb-6 text-violet-300">
            Non-Technical Event – Guidelines
          </h3>

          <ul className="space-y-4 list-decimal list-inside text-gray-200">
            <li>Hackathon participants are eligible for non-tech events.</li>
            <li>Three levels with shortlisting at each stage.</li>
            <li><strong>Level 1:</strong> Picture connections.</li>
            <li><strong>Level 2:</strong> Clue-based word identification.</li>
            <li><strong>Level 3:</strong> Find the incorrect logo.</li>
          </ul>
        </div>

      </div>
    </div>

  </div>
</section>
{/* PRIZES SECTION */}
<section ref={prizesRef} className="relative min-h-screen py-32 px-6">

  {/* Background */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/bg-video.mp4"
    autoPlay
    loop
    muted
  />
  <div className="absolute inset-0 bg-black/90" />

  <div className="relative z-10 max-w-7xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
      Prizes
    </h2>

    {/* ================= CERTIFICATES ================= */}
    <div className="grid md:grid-cols-2 gap-12 mb-36">

      {/* Participation Certificate */}
      <div className="hover-lift group relative overflow-hidden rounded-2xl border border-white/20 p-10 bg-black/70 backdrop-blur-md text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 opacity-0 group-hover:opacity-100 transition duration-300" />
        <div className="relative z-10 text-white">
          <h3 className="text-2xl font-bold mb-4">Participation Certificate</h3>
          <p className="text-gray-200">
            All participants of AI Hackathon and Non-Technical Event will receive participation certificates.
          </p>
        </div>
      </div>

      {/* Winner Certificate */}
      <div className="hover-lift group relative overflow-hidden rounded-2xl border border-white/20 p-10 bg-black/70 backdrop-blur-md text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 opacity-0 group-hover:opacity-100 transition duration-300" />
        <div className="relative z-10 text-white">
          <h3 className="text-2xl font-bold mb-4">Winner Certificate</h3>
          <p className="text-gray-200">
            Winners of both events will receive merit certificates along with cash prizes.
          </p>
        </div>
      </div>

    </div>

    {/* ================= AI HACKATHON ================= */}
    <h3 className="text-3xl font-extrabold text-center mb-16 text-yellow-300">
      Hack Ragnarok
    </h3>

    <div className="grid md:grid-cols-3 gap-16 items-end mb-40">

      {/* SILVER */}
      <div className="hover-lift flex flex-col items-center">
        <div className="podium-float relative z-10 w-64 h-64 rounded-3xl bg-black/90 border border-blue-500 text-center flex flex-col justify-center items-center shadow-[0_0_30px_rgba(59,130,246,0.6)]">
          <div className="mb-4 text-4xl transition-transform duration-300 hover:scale-125 hover:-rotate-6">🥈</div>
          <p className="text-gray-300 text-sm tracking-widest mb-2">RUNNER UP</p>
          <h3 className="text-white text-3xl font-extrabold">₹2000</h3>
        </div>
        <div className="w-72 h-24 mt-[-10px] rounded-b-3xl bg-gradient-to-b from-blue-500/40 to-black" />
      </div>

      {/* GOLD */}
      <div className="hover-lift flex flex-col items-center">
        <div className="podium-float champion-glow relative z-10 w-72 h-72 rounded-3xl bg-black/95 border border-yellow-400 text-center flex flex-col justify-center items-center shadow-[0_0_50px_rgba(255,215,0,0.8)]">
          <div className="mb-5 text-5xl transition-transform duration-300 hover:scale-125 hover:rotate-6">🥇</div>
          <p className="text-gray-300 text-sm tracking-widest mb-2">CHAMPION</p>
          <h3 className="text-yellow-300 text-5xl font-extrabold">₹3000</h3>
        </div>
        <div className="w-80 h-28 mt-[-10px] rounded-b-3xl bg-gradient-to-b from-yellow-400/40 to-black" />
      </div>

      {/* BRONZE */}
      <div className="hover-lift flex flex-col items-center">
        <div className="podium-float relative z-10 w-64 h-64 rounded-3xl bg-black/90 border border-red-500 text-center flex flex-col justify-center items-center shadow-[0_0_30px_rgba(239,68,68,0.6)]">
          <div className="mb-4 text-4xl transition-transform duration-300 hover:scale-125 hover:rotate-6">🥉</div>
          <p className="text-gray-300 text-sm tracking-widest mb-2">2ND RUNNER UP</p>
          <h3 className="text-white text-3xl font-extrabold">₹1000</h3>
        </div>
        <div className="w-72 h-24 mt-[-10px] rounded-b-3xl bg-gradient-to-b from-red-500/40 to-black" />
      </div>

    </div>

    {/* ================= THINK & TWIST ================= */}
    <h3 className="text-3xl font-extrabold text-center mb-16 text-violet-300">
      Think & Twist 
    </h3>

    <div className="grid md:grid-cols-2 gap-16">

      <div className="hover-lift relative rounded-3xl p-10 bg-black/80 border border-violet-500/40 text-center text-white shadow-[0_0_30px_rgba(139,92,246,0.6)]">
        <h4 className="text-xl font-bold text-violet-300 mb-2">WINNER</h4>
        <p className="text-4xl font-extrabold">₹1000</p>
      </div>

      <div className="hover-lift relative rounded-3xl p-10 bg-black/80 border border-gray-400/40 text-center text-white shadow-[0_0_30px_rgba(156,163,175,0.6)]">
        <h4 className="text-xl font-bold text-gray-300 mb-2">RUNNER UP</h4>
        <p className="text-4xl font-extrabold">₹500</p>
      </div>

    </div>

  </div>
</section>
{/* COORDINATOR SECTION */}
<section
  ref={coordinatorRef}
  className="relative min-h-screen py-28 px-6"
>
  {/* Background */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/bg-video.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="absolute inset-0 bg-black/90" />

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* Title */}
   <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
      Coordinators
    </h2>

    {/* ================= STUDENT COORDINATORS (TEXT ONLY) ================= */}
    <div className="text-center mb-28">
      <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Student Coordinators
      </h3>

      <p className="text-lg text-gray-200">
        <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Viswanth
        </span>{" "}
        – 8668008781
      </p>
      <p className="text-lg text-gray-200 mt-2">
        <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Sonia
        </span>{" "}
        – 9500239751
      </p>
    </div>

    {/* ================= STAFF / HOD / PRINCIPAL ================= */}
    <div className="grid md:grid-cols-3 gap-14">

      {/* STAFF COORDINATOR */}
      <div className="coordinator-card relative rounded-3xl p-8 bg-black/80 border border-white/20 text-center backdrop-blur-md shadow-[0_0_25px_rgba(236,72,153,0.35)]">
        <div className="w-28 h-28 mx-auto mb-6 rounded-full p-[3px] bg-gradient-to-r from-purple-400 to-pink-500">
          <img
            src="/asir.png"
            alt="Mr. D. Asir"
            className="coordinator-img w-full h-full rounded-full object-cover bg-black"
          />
        </div>
        <h4 className="text-xl font-bold text-white">Mr. D. Asir</h4>
        <p className="mt-1 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          AP – CSE
        </p>
        <p className="text-gray-400 mt-1">Staff Coordinator</p>
      </div>

      {/* HOD */}
      <div className="coordinator-card relative rounded-3xl p-8 bg-black/80 border border-white/20 text-center backdrop-blur-md shadow-[0_0_25px_rgba(236,72,153,0.35)]">
        <div className="w-28 h-28 mx-auto mb-6 rounded-full p-[3px] bg-gradient-to-r from-purple-400 to-pink-500">
          <img
            src="/hod.png"
            alt="Dr. A. Meenakshi"
            className="coordinator-img w-full h-full rounded-full object-cover bg-black"
          />
        </div>
        <h4 className="text-xl font-bold text-white">Dr. A. Meenakshi</h4>
        <p className="mt-1 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Professor & HOD
        </p>
        <p className="text-gray-400 mt-1">Convener</p>
      </div>

      {/* PRINCIPAL */}
      <div className="coordinator-card relative rounded-3xl p-8 bg-black/80 border border-white/20 text-center backdrop-blur-md shadow-[0_0_25px_rgba(236,72,153,0.35)]">
        <div className="w-28 h-28 mx-auto mb-6 rounded-full p-[3px] bg-gradient-to-r from-purple-400 to-pink-500">
          <img
            src="/principal.png"
            alt="Dr. S. Senthil"
            className="coordinator-img w-full h-full rounded-full object-cover bg-black"
          />
        </div>
        <h4 className="text-xl font-bold text-white">Dr. S. Senthil</h4>
        <p className="mt-1 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Principal
        </p>
      </div>

    </div>

  </div>
</section>
{/* FOOTER */}
<footer className="relative py-20 px-6 overflow-hidden">


  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/bg-video.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/90" />

  {/* Gradient Top Border */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 z-10" />

  <div className="relative z-20 max-w-7xl mx-auto">

    {/* Main Footer Content */}
    <div className="grid md:grid-cols-3 gap-14 text-center md:text-left">

      {/* Symposium Info */}
      <div>
        <h3 className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
          Kreativ’26
        </h3>
        <p className="text-gray-400 leading-relaxed">
          National Level Technical Symposium conducted by <br />
          Kamaraj College of Engineering and Technology.
        </p>
      </div>

      {/* Quick Links (Smooth Scroll Only) */}
      <div>
        <h4 className="text-lg font-bold text-white mb-4">
          Quick Links
        </h4>
        <ul className="space-y-3 text-gray-400">
         <li className="cursor-pointer hover:text-violet-400" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</li>
            <li className="cursor-pointer hover:text-violet-400" onClick={scrollToEvents}>Events</li>
            <li className="cursor-pointer hover:text-violet-400" onClick={scrollToGuidelines}>Guidelines</li>
            <li className="cursor-pointer hover:text-violet-400" onClick={scrollToPrizes}>Prizes</li>
            <li className="cursor-pointer hover:text-violet-400" onClick={scrollToCoordinator}>Coordinator</li>
        </ul>
      </div>

      {/* Location (Map) */}
      <div>
        <h4 className="text-lg font-bold text-white mb-4">
          Location
        </h4>

        <div className="rounded-xl overflow-hidden border border-white/10 shadow-[0_0_25px_rgba(236,72,153,0.25)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.0962973847763!2d77.9632272750738!3d9.672812990416544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b012a8e3d378b53%3A0x15d8265b00bea0df!2sKamaraj%20College%20of%20Engineering%20%26%20Technology%20(Autonomous)!5e0!3m2!1sen!2sin!4v1769010249209!5m2!1sen!2sin"
            width="100%"
            height="230"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </div>

    {/* Divider */}
    <div className="my-12 h-[1px] bg-white/10" />

    {/* Bottom Row */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">

      <p>
        © 2026{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">
          Kreativ’26
        </span>{" "}
        • All Rights Reserved
      </p>

      <p>
        Designed & Developed by{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">
          TrackA Team
        </span>
      </p>

    </div>

  </div>
</footer>





    </div>
  )
}
