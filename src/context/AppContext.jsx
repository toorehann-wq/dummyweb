import { createContext, useContext, useState, useRef } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [loveLetterOpen, setLoveLetterOpen] = useState(false)
  const audioRef = useRef(null)
  const [musicPlaying, setMusicPlaying] = useState(false)

  return (
    <AppContext.Provider
      value={{
        loveLetterOpen,
        setLoveLetterOpen,
        audioRef,
        musicPlaying,
        setMusicPlaying,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
