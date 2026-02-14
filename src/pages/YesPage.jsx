import { useNavigate } from 'react-router-dom'
import FloatingHearts from '../components/FloatingHearts'
import '../styles/YesPage.css'

export default function YesPage() {
  const navigate = useNavigate()

  return (
    <main className="yes-page">
      <FloatingHearts />

      <section className="yes-content">
        <h1 className="yes-title">I knew you'd say yes, cutie 💖</h1>
        <p className="yes-subtext">You just made my day!</p>

        <div className="yes-gif-wrap">
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3Q3NGJtOHNlMGwxNzdwZ2ZxazJ6ZDVqNDNxZThqZnVyb3NlaDI2ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Mp0xEFTkY0l3vw2Sit/giphy.gif"
            alt="Happy celebration"
            className="yes-gif"
          />
        </div>

        <button
          type="button"
          className="btn btn-journey"
          onClick={() => navigate('/journey')}
        >
          💌 Our Journey
        </button>
      </section>
    </main>
  )
}
