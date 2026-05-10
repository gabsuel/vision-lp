import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const [sent, setSent] = useState(false)
  const textareaRef = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const onTextareaInput = (e) => {
    e.target.style.height = 'auto'
    e.target.style.height = e.target.scrollHeight + 'px'
  }

  return (
    <footer
      id="contactar"
      className="relative mt-12 overflow-hidden border-t border-white/5 bg-[#020202] px-6 pb-12 pt-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-[100%] bg-gold/5 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto mb-16 flex max-w-4xl flex-col items-center text-center"
      >
        <div className="badge mb-8 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
          <span className="badge-label">Escale sua Operação</span>
        </div>
        <h2 className="mb-6 font-montserrat text-[3.5rem] font-bold leading-[1] tracking-tighter md:text-[5.5rem] lg:text-[7rem]">
          Escale seu
          <br />
          <span className="text-gold-metallic italic">Legado.</span>
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/50">
          Está na hora de parar de vender propriedades e começar a vender um
          estilo de vida. Fale conosco e descubra a estratégia de imagem para
          bater seus recordes de vendas.
        </p>
      </motion.div>

      <div className="relative z-10 mx-auto mb-24 max-w-3xl">
        {sent ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-gold/30 bg-gold/5 p-10 text-center"
          >
            <p className="text-base font-medium text-gold">
              Sua solicitação foi enviada com sucesso! Nossa equipe comercial
              entrará em contato em breve.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <FloatingInput id="nome" label="Nome do Corretor / Imobiliária" />
              <FloatingInput id="email" label="E-mail Corporativo" type="email" />
            </div>

            <div className="relative pt-6">
              <textarea
                ref={textareaRef}
                id="mensagem"
                rows={1}
                required
                placeholder=" "
                onInput={onTextareaInput}
                className="peer w-full resize-none overflow-hidden border-b border-white/20 bg-transparent pb-3 text-lg text-white transition-colors focus:border-gold focus:outline-none"
              />
              <label
                htmlFor="mensagem"
                className="absolute left-0 top-6 cursor-text text-lg text-white/50 transition-all duration-300 peer-valid:top-0 peer-valid:text-xs peer-valid:text-white/30 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gold"
              >
                Qual sua meta de vendas este ano?
              </label>
            </div>

            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="group relative overflow-hidden rounded-full border border-gold/40 px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] text-gold transition-colors duration-500 hover:border-transparent hover:text-black"
              >
                <span className="relative z-10">
                  Agendar Reunião Estratégica
                </span>
                <div className="absolute inset-0 z-0 origin-center scale-x-0 bg-gold-metallic transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 border-t border-white/10 pt-8 md:flex-row">
        <div className="flex flex-col gap-2 text-sm text-white/60">
          <a
            href="mailto:contato@vision.com.br"
            className="flex items-center gap-2 transition-colors hover:text-gold"
          >
            <Mail /> contato@vision.com.br
          </a>
          <a
            href="tel:+5592999999999"
            className="flex items-center gap-2 transition-colors hover:text-gold"
          >
            <Phone /> +55 92 99999-9999
          </a>
          <div className="mt-1 flex items-center gap-2">
            <Pin /> Manaus, AM — Brasil
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="#home" className="text-sm text-white/50 hover:text-gold">
            Home
          </a>
          <a href="#servicos" className="text-sm text-white/50 hover:text-gold">
            Serviços
          </a>
          <a
            href="#portfolio"
            className="text-sm text-white/50 hover:text-gold"
          >
            Resultados
          </a>
        </div>

        <div className="flex gap-4">
          <SocialIcon label="Instagram">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </SocialIcon>
          <SocialIcon label="TikTok">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </SocialIcon>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-white/30">
        © 2026 Vision. Todos os direitos reservados.
      </div>
    </footer>
  )
}

function FloatingInput({ id, label, type = 'text' }) {
  return (
    <div className="relative pt-6">
      <input
        id={id}
        type={type}
        required
        placeholder=" "
        className="peer w-full border-b border-white/20 bg-transparent pb-3 text-lg text-white transition-colors focus:border-gold focus:outline-none"
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-6 cursor-text text-lg text-white/50 transition-all duration-300 peer-valid:top-0 peer-valid:text-xs peer-valid:text-white/30 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gold"
      >
        {label}
      </label>
    </div>
  )
}

function SocialIcon({ label, children }) {
  return (
    <a
      href="#"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-card text-white transition-colors hover:border-gold hover:text-gold"
    >
      <span className="sr-only">{label}</span>
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
        {children}
      </svg>
    </a>
  )
}

function Mail() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function Phone() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function Pin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
