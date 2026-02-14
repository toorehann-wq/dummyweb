import { Routes, Route } from 'react-router-dom'
import ValentineQuestion from './pages/ValentineQuestion'
import YesPage from './pages/YesPage'
import JourneyPage from './pages/JourneyPage'
import MusicToggle from './components/MusicToggle'
import ComplimentButton from './components/ComplimentButton'
import HugButton from './components/HugButton'
import HeartTrail from './components/HeartTrail'
import LoveLetterBookModal from './components/LoveLetterBookModal'
import { useApp } from './context/AppContext'

function App() {
  const { loveLetterOpen, setLoveLetterOpen } = useApp()

  return (
    <div className="app">
      <MusicToggle />
      <ComplimentButton />
      <HugButton />
      <HeartTrail />
      <Routes>
        <Route path="/" element={<ValentineQuestion />} />
        <Route path="/yes" element={<YesPage />} />
        <Route path="/journey" element={<JourneyPage />} />
      </Routes>
      <LoveLetterBookModal
        isOpen={loveLetterOpen}
        onClose={() => setLoveLetterOpen(false)}
      />
    </div>
  )
}

export default App
