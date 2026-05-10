import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const TOTAL_FRAMES = 169
const FRAME_SRC = (i) =>
  `/videos/eye-zoom-frames/f${String(i).padStart(3, '0')}.jpg`

export default function EyeZoom() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const currentFrameRef = useRef(0)
  const rafRef = useRef(0)
  const [ready, setReady] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    let loaded = 0
    let cancelled = false

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image()
      img.src = FRAME_SRC(i)
      img.onload = () => {
        if (cancelled) return
        loaded += 1
        setLoadProgress(loaded / TOTAL_FRAMES)
        if (loaded === TOTAL_FRAMES) setReady(true)
      }
      img.onerror = () => {
        loaded += 1
        setLoadProgress(loaded / TOTAL_FRAMES)
      }
      imagesRef.current[i - 1] = img
    }

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (!ready) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      drawFrame(currentFrameRef.current)
    }

    const drawFrame = (idx) => {
      const img = imagesRef.current[idx]
      if (!img || !img.complete) return
      const cw = canvas.width / (window.devicePixelRatio || 1)
      const ch = canvas.height / (window.devicePixelRatio || 1)
      const ratio = Math.max(cw / img.naturalWidth, ch / img.naturalHeight)
      const dw = img.naturalWidth * ratio
      const dh = img.naturalHeight * ratio
      const dx = (cw - dw) / 2
      const dy = (ch - dh) / 2
      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(img, dx, dy, dw, dh)
    }

    const tick = () => {
      const progress = scrollYProgress.get()
      const target = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(progress * (TOTAL_FRAMES - 1)))
      )
      if (target !== currentFrameRef.current) {
        currentFrameRef.current = target
        drawFrame(target)
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener('resize', resize)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [ready, scrollYProgress])

  // Hero overlay fades out fast, eye zoom takes over
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0])
  const overlayScale = useTransform(scrollYProgress, [0, 0.18], [1, 1.1])
  const overlayY = useTransform(scrollYProgress, [0, 0.18], [0, -80])
  // Initial dark gradient overlay (readability) fades faster
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  // End-of-scroll transition: eye fades out as the next H2 emerges from the pupil
  const eyeOpacity = useTransform(scrollYProgress, [0.82, 0.96], [1, 0])
  const blackOpacity = useTransform(scrollYProgress, [0.82, 0.96], [0, 1])
  const emergeScale = useTransform(scrollYProgress, [0.82, 1], [0.08, 1])
  const emergeOpacity = useTransform(scrollYProgress, [0.85, 0.97], [0, 1])
  const emergeBlur = useTransform(
    scrollYProgress,
    [0.82, 0.97],
    ['blur(20px)', 'blur(0px)']
  )

  return (
    <section
      ref={containerRef}
      className="relative h-[220vh] bg-base"
      aria-label="Hero: zoom no olhar"
    >
      <div
        id="home"
        className="sticky top-0 h-screen w-full overflow-hidden bg-base"
      >
        {/* Canvas with image-sequence eye zoom */}
        <motion.canvas
          ref={canvasRef}
          style={{ opacity: eyeOpacity }}
          className="absolute inset-0 h-full w-full"
        />

        {/* Loading state */}
        {!ready && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-base">
            <div className="flex flex-col items-center gap-4 text-white/60">
              <div className="font-mono text-[11px] uppercase tracking-[0.32em]">
                Carregando · {Math.round(loadProgress * 100)}%
              </div>
              <div className="h-px w-40 bg-white/15">
                <div
                  className="h-full bg-gold transition-[width] duration-150"
                  style={{ width: `${loadProgress * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Initial dark gradient + radial vignette for text readability */}
        <motion.div
          style={{ opacity: gradientOpacity }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-base/85 via-base/75 to-base"
        />
        <motion.div
          style={{ opacity: gradientOpacity }}
          className="pointer-events-none absolute inset-0"
          aria-hidden
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 45% at 50% 50%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, transparent 80%)',
            }}
          />
        </motion.div>

        {/* Hero content overlay */}
        <motion.div
          style={{
            opacity: overlayOpacity,
            scale: overlayScale,
            y: overlayY,
          }}
          className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center"
        >
          <div className="badge mb-8 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
            <span className="badge-label">Audiovisual focado em Vendas</span>
          </div>

          <h1
            className="font-montserrat text-5xl font-semibold leading-[1.1] tracking-[-0.03em] text-white md:text-7xl lg:text-[80px]"
            style={{
              textShadow: '0 1px 3px rgba(0,0,0,0.5)',
            }}
          >
            Crie sua marca,
            <br />
            <span className="text-gold-metallic">Escale suas vendas.</span>
          </h1>

          <p
            className="mt-8 max-w-2xl text-lg font-normal text-white/90"
            style={{
              textShadow: '0 1px 3px rgba(0,0,0,0.5)',
            }}
          >
            Transformamos seus imóveis de alto padrão em produções
            cinematográficas que atraem investidores, aumentam o valor
            percebido e fecham negócios milionários mais rápido.
          </p>

          <div className="mt-16 flex flex-col items-center text-white/70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="56"
              viewBox="0 0 28 56"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
              style={{ animationDuration: '2s' }}
            >
              <path d="M14 4v44" />
              <path d="M24 38l-10 10-10-10" />
            </svg>
          </div>
        </motion.div>

        {/* Final fade to black (covers the eye) */}
        <motion.div
          style={{ opacity: blackOpacity }}
          className="pointer-events-none absolute inset-0 z-20 bg-base"
        />

        {/* H2 emerging from inside the pupil */}
        <motion.div
          style={{
            opacity: emergeOpacity,
            scale: emergeScale,
            filter: emergeBlur,
          }}
          className="pointer-events-none absolute inset-0 z-30 mx-auto flex max-w-4xl items-center justify-center px-6 text-center"
        >
          <h2 className="font-montserrat text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
            Audiovisual que{' '}
            <span className="text-gold-metallic">fecha negócios.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  )
}
