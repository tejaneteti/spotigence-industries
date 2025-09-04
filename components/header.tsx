"use client"

export default function Header() {
  return (
    <header className="absolute w-full z-20 flex items-center justify-between p-6 top-0">
      {/* Brand */}
      <a
        href="https://spotigenceindustries.com/"
        className="text-white text-sm md:text-base font-medium tracking-tight hover:text-white/90 transition-colors"
        aria-label="Spotigence Industries homepage"
      >
        Spotigence Industries
      </a>

      {/* Simple contact link */}
      <nav className="flex items-center">
        <a
          href="mailto:info@spotigenceindustries.com"
          className="text-white/90 hover:text-white bg-white/10 hover:bg-white/15 text-xs font-medium px-4 py-2 rounded-full transition-all duration-200"
          aria-label="Email Spotigence Industries"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
