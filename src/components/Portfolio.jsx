import { motion } from 'framer-motion'

const properties = [
  {
    title: 'Mansão Contemporânea',
    location: 'Ponta Negra',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Casa de Campo',
    location: 'Tarumã',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Cobertura de Luxo',
    location: 'Adrianópolis',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Residência Exclusiva',
    location: 'Morada do Sol',
    img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
]

function Card({ p }) {
  return (
    <div className="group relative aspect-[4/5] w-[320px] shrink-0 cursor-pointer overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl md:aspect-video md:w-[500px]">
      <img
        src={p.img}
        alt={p.title}
        loading="lazy"
        decoding="async"
        width="500"
        height="281"
        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute bottom-6 left-6 translate-y-2 transition-transform duration-500 group-hover:translate-y-0 md:bottom-8 md:left-8">
        <p className="font-montserrat text-xl font-medium text-white drop-shadow-lg md:text-3xl">
          {p.title}
        </p>
        <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gold drop-shadow-md">
          {p.location}
        </p>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const loop = [...properties, ...properties]

  return (
    <section
      id="portfolio"
      className="relative z-10 -mt-[15vh] overflow-hidden bg-base pb-24 md:-mt-[30vh]"
    >
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-base to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-base to-transparent md:w-32" />

        <div className="overflow-hidden">
          <div className="marquee-track">
            {loop.map((p, i) => (
              <Card key={`${p.title}-${i}`} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
