import '../styles/GiftBox.css'
import giftBoxImg from '../../assets/gift-box.png'

export default function GiftBox({ onOpen }) {
  return (
    <button
      type="button"
      className="gift-box"
      onClick={onOpen}
      aria-label="Open surprise gift"
    >
      {/* Blended background: image colors → app background */}
      <div className="gift-blend-bg" aria-hidden="true" />
      <div className="gift-body">
        <img
          src={giftBoxImg}
          alt="Surprise gift box"
          className="gift-box-img"
        />
      </div>
    </button>
  )
}
