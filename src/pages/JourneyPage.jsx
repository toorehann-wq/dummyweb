import { useState } from 'react'
import { useApp } from '../context/AppContext'
import GiftBox from '../components/GiftBox'
import FlipCards from '../components/FlipCards'
import '../styles/JourneyPage.css'

import cuteMoment1 from '../../assets/cute_moment_ss.jpg'
import cuteMoment2 from '../../assets/cute_moment_ss2.jpg'
import cuteMoment3 from '../../assets/cute_moment_ss3.jpg'
import firstChat1 from '../../assets/first_chat.jpg'
import firstChat2 from '../../assets/first_chat2.jpg'
import firstChat3 from '../../assets/first_chat3.jpg'
import vcSs from '../../assets/vc_ss.jpg'
import vcSs2 from '../../assets/vc_ss2.jpg'
import loveuSs from '../../assets/loveu_ss.jpg'
import photo1 from '../../assets/IMG_20260214_151707_432.jpg'
import usImg from '../../assets/us.png'

const CUTE_MOMENTS = [cuteMoment1, cuteMoment2, cuteMoment3]
const FIRST_CHAT = [firstChat3, firstChat1, firstChat2]
const LOVE_VC = [
  { src: loveuSs, caption: "The first 'I love u' you said 💕" },
  { src: vcSs },
  { src: vcSs2 },
]

const JOURNEY_PLACEHOLDER = `Our story isn’t that straightforward — it’s complicated, and it still is.
We met online, not in the usual way two strangers typically meet.
Initially, I had no idea she was this cool, cute, lovely, amazing, stunning, adorable, kind sweetheart… but I do know now 💛✨

We’ve known each other for about 3–4 years now. We met on UC, and eventually I started noticing her around 6 months ago, I guess. Since then, we’ve talked continuously 💬, started liking each other’s vibe, and every moment with her has been fun 🥰.

Watching movies together 🎬, reading manga together 📖, watching reels together 📱 — it’s all been so much fun.

We know it’s a difficult and complicated relationship, but still, we took the risk and gave it a try ❤️‍🩹. I hope it turns out well. I don’t regret meeting her and loving her at all 💖.

She’s my sunshine ☀️, my cutie 🥰, my bebuu 💕.`;


const TABS = [
  { id: 'cute', label: 'Cute/Angry moments 💕' },
  { id: 'firstchat', label: 'First chat 💬' },
  { id: 'lovevc', label: 'Love & VC 💖' },
]

/* Floating hearts: fewer for better performance, [left %, size, delay] */
const FLOATING_HEARTS = [
  [10, 2, 0], [35, 2.2, 3], [60, 1.8, 6], [85, 2, 2], [20, 2.5, 5], [70, 2, 4], [50, 1.8, 1], [90, 2, 7],
]

export default function JourneyPage() {
  const { setLoveLetterOpen } = useApp()
  const [momentsTab, setMomentsTab] = useState('cute')

  return (
    <main className="journey-page">
      <div className="journey-floating-hearts" aria-hidden="true">
        {FLOATING_HEARTS.map(([left, size, delay], i) => (
          <span
            key={i}
            className="floating-heart"
            style={{
              left: `${left}%`,
              fontSize: `${size}rem`,
              animationDelay: `${delay}s`,
            }}
          >
            ♥
          </span>
        ))}
      </div>
      <div className="journey-page-content">
      <h1 className="journey-main-title">Our Love Journey</h1>

      <section className="journey-section section-photos">
        <h2 className="section-title">Our Photos</h2>

        <div className="photos-grid">
          <div className="photo-placeholder">
            <img
              src={photo1}
              alt="Our photo"
              className="photo-img"
            />
          </div>

          <div className="photo-placeholder">
            <img
              src={usImg}
              alt="Our photo"
              className="photo-img"
            />
          </div>
        </div>
      </section>

      <FlipCards />

      <section className="journey-section section-moments">
        <h2 className="section-title">Our Moments / Screenshots</h2>
        <div className="moments-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`moments-tab ${momentsTab === tab.id ? 'moments-tab-active' : ''}`}
              onClick={() => setMomentsTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="moments-tab-panels">
          {momentsTab === 'cute' && (
            <div className="moments-ss-grid">
              {CUTE_MOMENTS.map((src, i) => (
                <div key={i} className="moments-ss-card">
                  <img src={src} alt={`Cute moment ${i + 1}`} className="moments-ss-img" />
                </div>
              ))}
            </div>
          )}
          {momentsTab === 'firstchat' && (
            <div className="moments-ss-grid">
              {FIRST_CHAT.map((src, i) => (
                <div key={i} className="moments-ss-card">
                  <img src={src} alt={`First chat ${i + 1}`} className="moments-ss-img" />
                </div>
              ))}
            </div>
          )}
          {momentsTab === 'lovevc' && (
            <div className="moments-ss-grid">
              {LOVE_VC.map((item, i) => (
                <div key={i} className="moments-ss-card">
                  <img src={item.src} alt={item.caption || `Love & VC ${i + 1}`} className="moments-ss-img" />
                  {item.caption && (
                    <p className="moments-ss-caption">{item.caption}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="journey-section section-text">
        <h2 className="section-title">Our Story</h2>
        <p className="journey-paragraph">{JOURNEY_PLACEHOLDER}</p>
      </section>

      <section className="journey-section section-gift">
        <p className="open-me-text">Open me 💝</p>
        <GiftBox onOpen={() => setLoveLetterOpen(true)} />
      </section>
      </div>
    </main>
  )
}
