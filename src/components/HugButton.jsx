import { useState, useCallback, useEffect } from 'react'
import '../styles/HugButton.css'

export default function HugButton() {
  const [showHug, setShowHug] = useState(false)

  useEffect(() => {
    if (!showHug) return
    const t = setTimeout(() => setShowHug(false), 3000)
    return () => clearTimeout(t)
  }, [showHug])

  const sendHug = useCallback(() => setShowHug(true), [])

  return (
    <>
      <button
        type="button"
        className="hug-button"
        onClick={sendHug}
        aria-label="Send a hug"
      >
        <span className="hug-button-icon" aria-hidden="true">🤍</span>
        <span className="hug-button-label">Send me a hug</span>
      </button>
      {showHug && (
        <div className="hug-overlay" aria-live="polite">
          <img
            src="https://www.icegif.com/wp-content/uploads/hug-icegif-3.gif"
            alt="Hug"
            className="hug-gif"
          />
          <p className="hug-message">Hug sent successfully 💖</p>
        </div>
      )}
    </>
  )
}
