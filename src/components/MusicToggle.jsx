import { useRef, useCallback } from 'react'
import { useApp } from '../context/AppContext'
import '../styles/MusicToggle.css'

const Love_song = '../../assets/cute_song.mp3'

export default function MusicToggle() {
  const { audioRef, musicPlaying, setMusicPlaying } = useApp()
  const hasInteracted = useRef(false)

  const toggle = useCallback(() => {
    if (!hasInteracted.current) {
      hasInteracted.current = true
      if (!audioRef.current) {
        const audio = new Audio(Love_song)
        audio.loop = true
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
