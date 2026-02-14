import { useRef, useCallback } from 'react'
import { useApp } from '../context/AppContext'
import '../styles/MusicToggle.css'

// Dynamic import so app builds even if file is missing; path works on GitHub Pages
const loveSongUrlRef = { current: null }
import('../../assets/cute_song.mp3').then((m) => { loveSongUrlRef.current = m.default }).catch(() => {})

export default function MusicToggle() {
  const { audioRef, musicPlaying, setMusicPlaying } = useApp()
  const hasInteracted = useRef(false)

  const toggle = useCallback(() => {
    if (!hasInteracted.current) {
      hasInteracted.current = true
      const url = loveSongUrlRef.current
      if (!audioRef.current && url) {
        const audio = new Audio(url)
        audio.loop = true
        audio.volume = 0.6
        audioRef.current = audio
      }
    }

    const audio = audioRef.current
    if (!audio) return

    if (musicPlaying) {
      audio.pause()
      setMusicPlaying(false)
    } else {
      audio.play().catch(() => {})
      setMusicPlaying(true)
    }
  }, [audioRef, musicPlaying, setMusicPlaying])

  return (
    <button
      type="button"
      className="music-toggle"
      onClick={toggle}
      aria-label={musicPlaying ? 'Turn music off' : 'Turn music on'}
      title={musicPlaying ? 'Music ON' : 'Music OFF'}
    >
      <span className="music-toggle-icon">{musicPlaying ? '🔊' : '🔇'}</span>
      <span className="music-toggle-label">{musicPlaying ? 'Music ON' : 'Music OFF'}</span>
    </button>
  )
}
