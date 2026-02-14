import { useState } from 'react'
import '../styles/LoveLetterBookModal.css'

const PLACEHOLDER_PAGES = [
  `Hy Shruti, my cutie 💖,

I love you with all my heart and everything I’ve got. Every time I see you, I am still in awe — like, how did you even fall for me? 🥹 What do you even see in me? You are pretty, beautiful, kind, gorgeous, sexy, and stunning 😍✨… and here I am, just an average guy.

You, YEDI ladki 😅 — how did you even fall for me?

But anyway, whatever happens, happens for a reason, right? 💫
Now it’s my duty to be the best boyfriend and give you all the love and care you deserve, sweetheart 💕.`,
  `While we were talking on DC, remember the first time I messaged you after you left the server? That was the first time I felt uneasy because of your absence 😔. Still, we were not a thing back then… but your absence haunted me. I should have realised at that point that you were becoming important to me 🫶.
After that, we were talking daily like crazy 😄 and I never realised when I started to fall for you.

I don’t know when you captivated my heart with your cute, adorable talks and your killer smile 😍. Everything you do — every little habit of yours — melts me 🫠. I am being serious, I have never felt like this before. You are special to me, baby 💖.

Also, when I told you I needed a break… I didn’t want to go. I never wanted to stop talking to you 😞. But still, I wrote that long ahh message and left, hoping you would stop me… and I’m so glad you did 🥹, because of that, here we are, baby sweet 💕.`,
  `Happy first Valentine’s Day, baby ❤️🌹, and I hope we get to celebrate many more together 🥰.
Everything we planned on chat — I really intend to do it with you, each and everything, baby 💌.

Shruti, the genuine efforts you make to be better are just amazing ✨. Even though I act like a jerk many times 😔, you still forgive me — you’re just amazing, my love 💖.
And YES, we will make lots and lots of memories together, darling 📸💫.

Please stay the same as you are — the kind, loving, sweet soul you are 💛 — and keep loving me like you do 🥰. Even though this long distance is killing me 😣, it is still worth it because of you, my love 💕.

I promise to love you the way you want me to be loved 🤍.

Your loving Boyfriend,
Rehan 💌`
]

export default function LoveLetterBookModal({ isOpen, onClose }) {
  const [page, setPage] = useState(0)
  const totalPages = PLACEHOLDER_PAGES.length

  if (!isOpen) return null

  const goNext = () => setPage((p) => Math.min(p + 1, totalPages - 1))
  const goPrev = () => setPage((p) => Math.max(p - 1, 0))

  return (
    <div
      className="love-letter-book-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Love letter"
    >
      <div className="love-letter-book" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="love-letter-book-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="love-letter-book-hearts">💖 💕 💗</div>
        <h2 className="love-letter-book-title">My Love Letter 💖</h2>

        <div className="love-letter-book-page">
          <p className="love-letter-book-body">{PLACEHOLDER_PAGES[page]}</p>
        </div>

        <div className="love-letter-book-nav">
          <button
            type="button"
            className="love-letter-book-btn love-letter-book-prev"
            onClick={goPrev}
            disabled={page === 0}
            aria-label="Previous page"
          >
            Previous
          </button>
          <span className="love-letter-book-indicator">
            Page {page + 1} / {totalPages}
          </span>
          <button
            type="button"
            className="love-letter-book-btn love-letter-book-next"
            onClick={goNext}
            disabled={page === totalPages - 1}
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
