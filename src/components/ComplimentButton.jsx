import { useState, useCallback } from 'react'
import '../styles/ComplimentButton.css'

const COMPLIMENTS = [
  'The way you make me feel is amazing 💖',
  'The only curve of yours I crave for is your smile 😊',
  'You make every day brighter! ✨',
  'Your smile is my favorite view 💕',
  'You are incredibly special to me! 💖',
  'I fall for you more every day 🌸',
  'You have the kindest heart 💗',
  'Being with you feels like home 🏠',
  'You are beautiful inside and out 💝',
  'You’re the WiFi to my heart — I’m lost without you 📶',
  'Are you a magician? Because whenever I look at you everyone else disappears 🪄',
  'You’re like a software update — every time I see you, you get better 💻',
  'If you were a vegetable you’d be a cute-cumber 🥒',
  'I must be a snowflake because I’ve fallen for you ❄️',
  'You’re the reason I believe in love at first typo — I mean sight 👀',
  'Do you have a name or can I call you mine? 😏',
  'You’re so sweet you’re giving me a toothache 🦷💕',
  'I’d say God bless you but it looks like he already did 🙏',
  'You’re my favorite notification 🔔',
  'Roses are red, my code has a bug — but you’re the only fix I need 🐛💖',
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
    }, 7000)
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
