import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import RunawayNoButton from '../components/RunawayNoButton'
import HeartConfetti from '../components/HeartConfetti'
import '../styles/ValentineQuestion.css'

export default function ValentineQuestion() {
  const navigate = useNavigate()
  const [confettiActive, setConfettiActive] = useState(false)

  const handleYes = useCallback(() => {
    setConfettiActive(true)
  }, [])

  const handleConfettiComplete = useCallback(() => {
    setConfettiActive(false)
    navigate('/yes')
  }, [navigate])

  return (
    <main className="valentine-page">
      <HeartConfetti active={confettiActive} onComplete={handleConfettiComplete} />
      <div className="hearts-bg" aria-hidden="true">
        <span className="heart heart-1">❤️</span>
        <span className="heart heart-2">💕</span>
        <span className="heart heart-3">💗</span>
        <span className="heart heart-4">💖</span>
        <span className="heart heart-5">💝</span>
      </div>

      <section className="valentine-content">
        <h1 className="valentine-title">Will you be my Valentine?</h1>

        <div className="valentine-gif-wrap">
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHA4ZmprOW43OHJtbWJ0M3RoNW9qNTIzMDMycW0xaG8zOHR1Y2lsNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ffzhLUixCtlsc/giphy.gif"
            alt="Cute Valentine"
            className="valentine-gif"
          />
        </div>

        <div className="valentine-buttons">
          <button
            type="button"
            className="btn btn-yes"
            onClick={handleYes}
          >
            ❤️ Yes
          </button>
          <RunawayNoButton />
        </div>
      </section>
    </main>
  )
}
