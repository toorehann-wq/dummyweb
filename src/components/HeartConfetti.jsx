import { useEffect, useState } from 'react'
import '../styles/HeartConfetti.css'

const HEARTS = ['❤️', '💕', '💗', '💖', '💝', '💓']
const COUNT = 28

export default function HeartConfetti({ active, onComplete }) {
  const [particles] = useState(() =>
    Array.from({ length: COUNT }, (_, i) => ({
      id: i,
      char: HEARTS[i % HEARTS.length],
      x: Math.random() * 100 - 10,
      delay: Math.random() * 0.3,
      duration: 1.2 + Math.random() * 0.8,
      size: 0.8 + Math.random() * 0.8,
      rotation: Math.random() * 360,
    }))
  )

  useEffect(() => {
    if (!active) return
    const t = setTimeout(() => {
      onComplete?.()
    }, 2000)
    return () => clearTimeout(t)
  }, [active, onComplete])

  if (!active) return null

  return (
    <div className="heart-confetti" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="heart-confetti-particle"
          style={{
            '--x': `${p.x}vw`,
            '--delay': `${p.delay}s`,
            '--duration': `${p.duration}s`,
            '--size': p.size,
            '--rotation': `${p.rotation}deg`,
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  )
}
