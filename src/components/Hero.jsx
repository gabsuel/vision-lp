import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="header"
      className="relative isolate overflow-hidden pt-[140px] pb-20 sm:pt-[180px] sm:pb-28 md:pt-[200px] md:pb-32"
    >
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[900px] rounded-full bg-gold/8 blur-[140px]" />

      <div className="container-edit relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="text-[12px] text-gold mb-8 sm:mb-10"
        >
          ● Marketing imobiliário · Lisboa
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="display text-cream text-[52px] xs:text-[64px] sm:text-[88px] md:text-[120px] lg:text-[140px] text-balance"
          style={{ fontWeight: 400 }}
        >
          Conteúdo que <em className="display-italic text-gold-metallic font-light">vende</em> imóveis.
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="mt-8 sm:mt-10 max-w-xl text-[16px] sm:text-[17px] leading-[1.6] text-cream/65"
        >
          Filme, redes sociais e tráfego pago para consultores e imobiliárias
          que querem destacar-se. Sem fórmulas prontas. Resultado mensurável.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
          className="mt-10 sm:mt-12 flex flex-wrap items-center gap-3"
        >
          <a href="#footer" className="btn-fill-gold group">
            Pedir proposta
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#real-estate" className="btn-ink text-cream/85 border-cream/20 hover:text-gold hover:border-gold">
            Ver trabalho
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
          className="mt-16 sm:mt-24 grid grid-cols-3 gap-4 sm:gap-8 border-t border-cream/10 pt-8 sm:pt-10 max-w-2xl"
        >
          <Stat n="27+" label="Projetos" />
          <Stat n="1M+" label="Views geradas" />
          <Stat n="22M+" label="Horas filmadas" />
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ n, label }) {
  return (
    <div>
      <div className="display text-cream text-[32px] sm:text-[44px] md:text-[56px] leading-none" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144" }}>
        {n}
      </div>
      <div className="mt-2 text-[12px] text-cream/45">
        {label}
      </div>
    </div>
  )
}
