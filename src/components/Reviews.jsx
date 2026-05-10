const reviews = [
  {
    body: 'A Vision acelerou drasticamente nosso tempo de venda. Imóveis que estavam parados há meses foram vendidos em semanas após a nova estratégia de vídeo e tráfego. O ROI é indiscutível.',
    name: 'Marcelo Prado',
    role: 'Diretor Comercial',
  },
  {
    body: 'Não é apenas vídeo bonito, é inteligência comercial. Desde que passamos o marketing das nossas captações exclusivas para eles, o volume de leads qualificados triplicou.',
    name: 'Diogo Tavares',
    role: 'Broker de Luxo',
  },
  {
    body: 'A melhor decisão financeira do ano. O posicionamento que a equipe construiu em volta do meu nome faz com que os clientes me procurem já decididos a comprar.',
    name: 'Mariana Costa',
    role: 'Consultora Top Producer',
  },
]

function Card({ r }) {
  return (
    <div className="flex w-[350px] shrink-0 flex-col justify-between rounded-2xl border border-white/5 bg-card p-8">
      <div>
        <div className="mb-6 flex text-gold">★★★★★</div>
        <p className="mb-8 text-sm leading-relaxed text-white/70">"{r.body}"</p>
      </div>
      <div className="flex items-center gap-4 border-t border-white/10 pt-6">
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-neutral-800">
          <span className="text-center text-[10px] text-white/50">
            {r.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </span>
        </div>
        <div>
          <p className="text-sm font-bold">{r.name}</p>
          <p className="text-xs text-gold">{r.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  const loop = [...reviews, ...reviews]
  return (
    <section className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute left-0 top-1/2 z-0 flex w-full -translate-y-1/2 justify-center">
        <h2 className="text-outline whitespace-nowrap font-montserrat text-[6rem] font-bold leading-none opacity-20 md:text-[12rem]">
          RESULTADOS
        </h2>
      </div>

      <div className="relative z-10 w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-base to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-base to-transparent md:w-32" />
        <div className="marquee-track marquee-track-fast">
          {loop.map((r, i) => (
            <Card key={`${r.name}-${i}`} r={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
