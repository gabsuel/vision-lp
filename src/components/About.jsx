import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Máquina de Vendas',
    body: 'Da captação visual até o anúncio no celular do investidor: controlamos todo o funil para você focar apenas em fechar o negócio.',
    big: true,
  },
  {
    title: 'Valor Percebido',
    body: 'Um imóvel de R$ 5 milhões precisa parecer que vale R$ 10 milhões. A nossa produção cinematográfica garante isso.',
  },
  {
    title: 'Escala Previsível',
    body: 'Transformamos a atração de clientes premium num processo constante e previsível através de tráfego de alta precisão.',
  },
]

export default function About() {
  return (
    <section
      id="sobre"
      className="border-y border-white/5 bg-[#080808] px-6 py-32"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex w-full flex-col justify-center lg:w-5/12"
        >
          <div className="badge mb-8 w-fit">
            <span className="badge-label">Nossa Visão</span>
          </div>
          <h2 className="mb-8 font-montserrat text-4xl font-medium leading-tight md:text-5xl">
            Muito além do
            <br />
            <span className="text-gold-metallic italic">visual.</span>
          </h2>
          <p className="mb-8 text-xl font-light leading-relaxed text-white/60">
            Não fazemos apenas vídeos bonitos. Somos estrategistas dedicados a{' '}
            <strong className="font-medium text-white">
              multiplicar o faturamento
            </strong>{' '}
            de operações imobiliárias high-ticket através de uma estética
            irresistível.
          </p>
          <div className="mb-8 h-px w-12 bg-gold" />
          <p className="text-xs font-bold uppercase tracking-widest text-gold">
            A alavanca que faltava na sua região.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:w-7/12"
        >
          {cards.map((c) => (
            <div
              key={c.title}
              className={`flex flex-col justify-center rounded-3xl border border-white/5 bg-card p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 ${
                c.big ? 'sm:col-span-2' : ''
              }`}
            >
              <h4
                className={`mb-3 font-montserrat font-bold text-gold-metallic ${
                  c.big ? 'text-2xl' : 'text-xl'
                }`}
              >
                {c.title}
              </h4>
              <p className="text-sm leading-relaxed text-white/50">{c.body}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
