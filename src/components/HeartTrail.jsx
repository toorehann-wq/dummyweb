import { useEffect, useRef, useCallback, useState } from 'react'
import { useApp } from '../context/AppContext'
import '../styles/HeartTrail.css'

const SYMBOLS = ['❤️', '💕', '💗', '✨']
const MAX_PARTICLES = 12
const THROTTLE_MS = 80

export default function HeartTrail() {
  const { loveLetterOpen } = useApp()
  const [particles, setParticles] = useState([])
  const lastTime = useRef(0)
  const idRef = useRef(0)
  const rafRef = useRef(null)

  const addParticle = useCallback((clientX, clientY) => {
    if (loveLetterOpen) return
    const now = Date.now()
    if (now - lastTime.current < THROTTLE_MS) return
    lastTime.current = now

    const id = ++idRef.current
    const char = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
    setParticles((prev) => {
      const next = [...prev, { id, x: clientX, y: clientY, char }]
      return next.slice(-MAX_PARTICLES)
    })
    setTimeout(() => {
      setParticles((p) => p.filter((n) => n.id !== id))
    }, 800)
  }, [loveLetterOpen])

  const handleMove = useCallback(
    (e) => {
      const x = e.clientX ?? e.touches?.[0]?.clientX
      const y = e.clientY ?? e.touches?.[0]?.clientY
      if (x != null && y != null) addParticle(x, y)
    },
    [addParticle]
  )

  useEffect(() => {
    document.addEventListener('mousemove', handleMove, { passive: true })
    document.addEventListener('touchmove', handleMove, { passive: true })
    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('touchmove', handleMove)
    }
  }, [handleMove])

  return (
    <div className="heart-trail" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="heart-trail-particle"
          style={{ left: p.x, top: p.y }}
        >
          {p.char}
        </span>
      ))}
    </div>
  )
}
