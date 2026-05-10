import { useEffect, useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#portfolio', label: 'Resultados' },
  { href: '#sobre', label: 'Nossa Visão' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] border-b transition-colors duration-300 ${
        scrolled
          ? 'border-white/10 bg-base/85 backdrop-blur-xl'
          : 'border-white/5 bg-base/60 backdrop-blur-md'
      }`}
    >
      <nav className="container-wide relative flex items-center justify-between py-5">
        <a
          href="#home"
          className="relative z-10 font-unbounded text-2xl font-bold tracking-tighter text-gold-metallic"
        >
          vision.
        </a>

        <ul className="absolute left-1/2 z-10 hidden -translate-x-1/2 transform items-center gap-10 md:flex">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`group relative py-2 text-sm font-medium transition-colors ${
                  i === 0 ? 'text-gold' : 'text-white/70 hover:text-white'
                }`}
              >
                {l.label}
                <span
                  className={`absolute bottom-0 left-0 h-px transition-all duration-300 ${
                    i === 0
                      ? 'w-full bg-gold'
                      : 'w-0 bg-white group-hover:w-full'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contactar"
          className="btn-gold relative z-10 hidden sm:inline-flex"
        >
          Falar com Especialista
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 text-white md:hidden"
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-base/95 backdrop-blur-xl md:hidden">
          <ul className="container-wide flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-white/80 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contactar"
                onClick={() => setOpen(false)}
                className="btn-gold w-full justify-center"
              >
                Falar com Especialista
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
