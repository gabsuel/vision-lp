import { motion } from 'framer-motion'

const services = [
  {
    n: '01',
    title: 'Audiovisual de\nAlta Conversão',
    body: 'Captação com qualidade de cinema desenhada para vender. Criamos vídeos que despertam desejo imediato e qualificam o comprador investidor antes mesmo da primeira visita física.',
    bullets: [
      'Cinematic Property Tours & Drone',
      'Apresentações que justificam Alto Valor',
      'Formatos Virais que geram Leads Nativos',
    ],
    img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    badgeRight: false,
  },
  {
    n: '02',
    title: 'Posicionamento que\nGera Confiança',
    body: 'Investidores compram de quem confiam. Transformamos você e sua imobiliária na maior autoridade do mercado local, atraindo clientes que não discutem preço, mas buscam sua expertise.',
    bullets: [
      'Branding Pessoal para Brokers Premium',
      'Gestão Estratégica de Redes Sociais',
      'Scripts de Venda em Vídeo',
    ],
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    badgeRight: true,
  },
  {
    n: '03',
    title: 'Tráfego Exclusivo\npara High-Ticket',
    body: 'Seus vídeos espetaculares na tela certa. Campanhas focadas em investidores e compradores com alto poder aquisitivo no Brasil inteiro, entregando leads quentes na mão do seu time comercial.',
    bullets: [
      'Segmentação de Público Investidor',
      'Injeção de Leads Qualificados no CRM',
      'Retargeting Inteligente para Fechamento',
    ],
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    badgeRight: false,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative border-t border-white/5 bg-surface py-32"
    >
      <div className="container-x relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <h2 className="mb-6 font-montserrat text-4xl font-bold md:text-5xl">
            O ecossistema para{' '}
            <span className="text-gold-metallic">Escalar.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50">
            Nós não fazemos apenas vídeos bonitos. Construímos uma máquina de
            atração e vendas combinando audiovisual cinematográfico com
            tráfego de alta precisão.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32">
          {services.map((s, i) => {
            const reverse = i % 2 === 1
            return (
              <motion.div
                key={s.n}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col items-center gap-12 lg:gap-20 ${
                  reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className="img-zoom-wrap relative aspect-[4/3] rounded-[2rem] border border-white/10 shadow-2xl">
                    <img
                      src={s.img}
                      alt={s.title.replace('\n', ' ')}
                      className="h-full w-full object-cover"
                    />
                    <div
                      className={`absolute top-6 z-10 rounded-full border border-white/10 bg-black/60 px-5 py-2 backdrop-blur-md ${
                        s.badgeRight ? 'right-6' : 'left-6'
                      }`}
                    >
                      <span className="text-sm font-bold uppercase tracking-widest text-gold">
                        {s.n}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <h3 className="mb-6 whitespace-pre-line font-montserrat text-3xl font-medium text-[#fffaf1] md:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mb-8 text-lg leading-relaxed text-white/50">
                    {s.body}
                  </p>
                  <ul className="space-y-4">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-3 font-light text-white/80"
                      >
                        <span className="font-bold text-gold">✓</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
