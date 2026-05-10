import { motion } from 'framer-motion'
import { reels } from '../content.js'
import { SectionHead } from './Portfolio.jsx'

const layout = [
  { span: 'lg:col-span-7 lg:row-span-2', ratio: 'aspect-[16/11] lg:aspect-auto lg:min-h-[480px]', big: true },
  { span: 'lg:col-span-5', ratio: 'aspect-[9/12]' },
  { span: 'lg:col-span-5', ratio: 'aspect-[9/12]' },
  { span: 'lg:col-span-6', ratio: 'aspect-[16/11]' },
  { span: 'lg:col-span-6', ratio: 'aspect-[16/11]' },
]

function Tile({ reel, l, i }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: i * 0.06 }}
      className={`group relative overflow-hidden col-span-12 ${l.span} ${l.ratio} bg-ink-card`}
    >
      <img
        src={reel.img}
        alt={reel.handle}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/30 to-transparent" />

      <div className="absolute bottom-5 left-5 right-5">
        <div
          className={`display text-cream leading-[0.85] ${l.big ? 'text-[88px] sm:text-[120px] md:text-[150px]' : 'text-[56px] sm:text-[76px]'}`}
          style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144" }}
        >
          {reel.views}
        </div>
        <div className="mt-2 flex items-end justify-between gap-3 text-[12px] text-cream/60">
          <span>{reel.label}</span>
          <span className="text-gold/70">views</span>
        </div>
      </div>

      <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="flex items-center gap-2 px-4 py-2 border border-gold/60 bg-ink-deep/60 backdrop-blur-sm text-[12px] text-gold">
          ▶ Reproduzir
        </span>
      </div>
    </motion.a>
  )
}

export default function ViralReels() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 overflow-hidden">
      <div className="container-x">
        <SectionHead
          eyebrow="Reels"
          title={
            <>
              Conteúdo que <em className="display-italic text-gold-metallic font-light">viraliza</em>.
            </>
          }
          sub="Mais de 1 milhão de views para parceiros REMAX, KW e Century 21. Cinematografia + estratégia editorial."
        />

        <div className="mt-14 md:mt-20 grid grid-cols-12 gap-3 sm:gap-4 md:gap-5">
          {reels.map((r, i) => (
            <Tile key={i} reel={r} l={layout[i] || layout[1]} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
