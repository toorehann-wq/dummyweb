import { useState, useCallback } from 'react'
import '../styles/ComplimentButton.css'

const COMPLIMENTS = [
  'You make every day brighter! ✨',
  'Your smile is my favorite view 💕',
  'You are incredibly special to me! 💖',
  'I fall for you more every day 🌸',
  'You have the kindest heart 💗',
  'Being with you feels like home 🏠',
  'You are beautiful inside and out 💝',
]

export default function ComplimentButton() {
  const [bubbles, setBubbles] = useState([])

  const addBubble = useCallback(() => {
    const text = COMPLIMENTS[Math.floor(Math.random() * COMPLIMENTS.length)]
    const id = Date.now() + Math.random()
    setBubbles((prev) => {
      const next = [...prev, { id, text }]
      return next.slice(-3)
    })
    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== id))
    }, 2500)
  }, [])

  return (
    <>
      <button
        type="button"
        className="compliment-button"
        onClick={addBubble}
        aria-label="Get a surprise compliment"
        title="Surprise compliment"
      >
        <span className="compliment-button-icon">✨</span>
        <span className="compliment-button-label">Surprise compliment</span>
      </button>
      <div className="compliment-bubbles" aria-live="polite">
        {bubbles.map((b) => (
          <div key={b.id} className="compliment-bubble">
            {b.text}
          </div>
        ))}
      </div>
    </>
  )
}
