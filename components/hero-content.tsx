"use client"

export default function HeroContent() {
  return (
    <div className="w-full">
       <div className="flex   justify-center items-center w-full">
        <img
          src="logo.png"
          className="w-[50%]  z-10 aspect-square md:w-[40%] lg:w-[30%]"
          alt="Spotigence Industries Logo"
        />
      </div>
    <main className="absolute bottom-8 left-8 z-20 max-w-lg md:max-w-xl w-full">
      
      <div className="text-left">
        {/* Badge */}
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{ filter: "url(#glass-effect)" }}
          aria-hidden="true"
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">Spotigence Industries</span>
        </div>

        <h1 className="text-5xl md:text-6xl tracking-tight font-light text-white mb-4 text-pretty">
          Coming Soon
          <br />
          <span className="font-light text-white/90">Intelligent Systems for the Real World</span>
        </h1>

        <p className="text-sm font-light text-white/75 mb-6 leading-relaxed">
          We’re building vision-driven autonomy—merging perception, planning, and onboard AI into deployable systems
          systems. We’re not ready yet, but we will be soon.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="mailto:info@spotigenceindustries.com"
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white/90 text-xs font-medium transition-colors"
            aria-label="Email Spotigence Industries"
          >
            Contact us
          </a>
          <a
            href="https://spotigenceindustries.com/"
            className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 hover:border-white/25 text-white/80 hover:text-white text-xs font-light transition-colors"
          >
            spotigenceindustries.com
          </a>
        </div>
      </div>
    </main>
    </div>
  )
}
