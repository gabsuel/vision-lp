import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const faqs = [
  {
    q: 'O audiovisual realmente fecha vendas?',
    a: 'Sim. Imóveis de luxo são vendidos pela emoção e status. Um vídeo cinematográfico bem direcionado não só impressiona, como filtra curiosos e entrega ao corretor um lead altamente intencionado, reduzindo o ciclo de venda.',
  },
  {
    q: 'Qual é o prazo para retorno sobre o investimento (ROI)?',
    a: 'A percepção de autoridade muda no momento em que o primeiro material vai ao ar. Em termos de conversão de tráfego pago para leads qualificados, costumamos ver tração sólida e fechamentos a partir do 2º e 3º mês de campanha otimizada.',
  },
]

function Item({ q, a, open, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={`cursor-pointer overflow-hidden rounded-2xl border bg-card transition-colors ${
        open ? 'border-gold' : 'border-white/5'
      }`}
    >
      <div className="flex items-center justify-between p-6">
        <h4 className="text-[15px] font-medium">{q}</h4>
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-gold transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        >
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
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden px-6 text-sm text-white/50"
          >
            <p className="pb-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="bg-base px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-3xl"
      >
        <h2 className="mb-12 text-center font-montserrat text-3xl font-medium">
          Como aceleramos
          <br />
          <span className="text-gold">seu faturamento?</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <Item
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
