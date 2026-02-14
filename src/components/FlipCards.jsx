import { useState } from 'react'
import '../styles/FlipCards.css'

const CARDS = [
  { emoji: '💕', back: 'You make me feel so special and loved.' },
  { emoji: '🌹', back: 'Your smile lights up my world in the best way.' },
  { emoji: '✨', back: 'I love how kind and caring you are to everyone especially to me.' },
  { emoji: '💖', back: 'You put genuine efforts to be better every day.' },
  { emoji: '🌸', back: 'All your little habits are so cute and adorable.' },
  { emoji: '😂', back: 'Do i have any other option but to love you? hehe jk but seriously, i your exsistence is enough for me to love you.' },
]

export default function FlipCards() {
  return (
    <section className="flip-cards-section">
      <h2 className="section-title">Why I Love You 💖</h2>
      <div className="flip-cards-grid">
        {CARDS.map((card, i) => (
          <div key={i} className="flip-card-wrap">
            <FlipCard emoji={card.emoji} back={card.back} />
          </div>
        ))}
      </div>
    </section>
  )
}

function FlipCard({ emoji, back }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      className={`flip-card ${flipped ? 'flip-card-flipped' : ''}`}
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="flip-card-front-content">
            <span className="flip-card-emoji" aria-hidden>{emoji}</span>
            <span className="flip-card-hint">Tap to reveal</span>
          </div>
        </div>
        <div className="flip-card-back">
          <p className="flip-card-text">{back}</p>
        </div>
      </div>
    </button>
  )
}
