import { motion } from 'framer-motion'
import { founders, collaborators } from '../content.js'
import { SectionHead } from './Portfolio.jsx'

export default function Team() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 overflow-hidden">
      <div className="container-x">
        <SectionHead
          eyebrow="Equipa"
          title={
            <>
              Três <em className="display-italic text-gold-metallic font-light">co-fundadores</em>, uma rede inteira.
            </>
          }
        />

        <div className="mt-14 md:mt-20 grid grid-cols-12 gap-x-4 sm:gap-x-6 gap-y-10">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="col-span-12 sm:col-span-4 group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-ink-card">
                <img
                  src={f.img}
                  alt={f.name}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.04]"
                />
              </div>

              <div className="mt-5">
                <h3 className="display text-cream text-[24px] sm:text-[26px]" style={{ fontWeight: 500, fontVariationSettings: "'opsz' 60", letterSpacing: '-0.02em' }}>
                  {f.name}
                </h3>
                <div className="mt-1 text-[12px] text-cream/45">
                  Co-fundador
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-24 grid grid-cols-12 gap-6"
        >
          <div className="col-span-12 md:col-span-3 border-t border-cream/10 pt-4">
            <div className="text-[12px] uppercase tracking-[0.18em] text-gold mb-2">Rede</div>
            <p className="text-[13px] text-cream/45 leading-relaxed">
              Colaboradores recorrentes em produção e edição.
            </p>
          </div>

          <ul className="col-span-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-cream/10 pt-4">
            {collaborators.map((name, i) => (
              <li
                key={name}
                className="group flex items-center gap-3 py-2.5 border-b border-cream/5 hover:border-gold/30 transition-colors"
              >
                <span className="text-[11px] text-cream/30 group-hover:text-gold/70 transition-colors w-6">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-[16px] text-cream/80 group-hover:text-cream transition-colors" style={{ fontWeight: 500, fontVariationSettings: "'opsz' 30" }}>
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
