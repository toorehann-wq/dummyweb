import { useRef, useCallback, useEffect } from 'react'
import '../styles/RunawayNoButton.css'

const PADDING = 24
const PROXIMITY = 100

function getRandomPosition(buttonRect, viewportWidth, viewportHeight) {
  const maxX = viewportWidth - buttonRect.width - PADDING
  const maxY = viewportHeight - buttonRect.height - PADDING
  const minX = PADDING
  const minY = PADDING

  let x = minX + Math.random() * (maxX - minX)
  let y = minY + Math.random() * (maxY - minY)

  const centerX = buttonRect.left + buttonRect.width / 2
  const centerY = buttonRect.top + buttonRect.height / 2
  const newCenterX = x + buttonRect.width / 2
  const newCenterY = y + buttonRect.height / 2
  const dist = Math.hypot(newCenterX - centerX, newCenterY - centerY)
  if (dist < 100) {
    x = centerX + (Math.random() > 0.5 ? 1 : -1) * (120 + Math.random() * 80) - buttonRect.width / 2
    y = centerY + (Math.random() > 0.5 ? 1 : -1) * (120 + Math.random() * 80) - buttonRect.height / 2
  }

  x = Math.max(minX, Math.min(maxX, x))
  y = Math.max(minY, Math.min(maxY, y))

  return { x, y }
}

function isNear(pointerX, pointerY, rect) {
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const dist = Math.hypot(pointerX - centerX, pointerY - centerY)
  return dist < rect.width + PROXIMITY
}

export default function RunawayNoButton() {
  const ref = useRef(null)
  const rafRef = useRef(null)

  const moveButton = useCallback(() => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const vw = window.innerWidth
    const vh = window.innerHeight

    const { x, y } = getRandomPosition(rect, vw, vh)

    el.style.position = 'fixed'
    el.style.left = `${x}px`
    el.style.top = `${y}px`
    el.style.transform = 'translate(0, 0)'
  }, [])

  useEffect(() => {
    const handlePointer = (e) => {
      const el = ref.current
      if (!el) return

      const clientX = e.clientX ?? e.touches?.[0]?.clientX
      const clientY = e.clientY ?? e.touches?.[0]?.clientY

      if (clientX == null || clientY == null) return

      const rect = el.getBoundingClientRect()
      if (!isNear(clientX, clientY, rect)) return

      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        moveButton()
        rafRef.current = null
      })
    }

    document.addEventListener('mousemove', handlePointer, { passive: true })
    document.addEventListener('touchmove', handlePointer, { passive: true })
    document.addEventListener('touchstart', handlePointer, { passive: true })

    return () => {
      document.removeEventListener('mousemove', handlePointer)
      document.removeEventListener('touchmove', handlePointer)
      document.removeEventListener('touchstart', handlePointer)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [moveButton])

  return (
    <button
      ref={ref}
      type="button"
      className="btn btn-no runaway-btn"
      aria-label="No (runs away)"
      onMouseEnter={moveButton}
      onFocus={moveButton}
    >
      💔 No
    </button>
  )
}
