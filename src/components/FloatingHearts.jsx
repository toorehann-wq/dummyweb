import "../styles/FloatingHearts.css";

const HEARTS = [
  "❤️",
  "💕",
  "💗",
  "💖",
  "💝",
  "🌸",
  "💘",
  "💞",
  "💓",
  "🌷",
  "🌹",
  "🩷"
];

export default function FloatingHearts() {
  return (
    <div className="floating-hearts" aria-hidden="true">
      {HEARTS.map((heart, i) => (
        <span
          key={i}
          className="floating-heart"
          style={{
            "--i": i,
            left: `${5 + (i * 7) % 90}%`,
            animationDelay: `${i * 1.2}s`
          }}
        >
          {heart}
        </span>
      ))}
    </div>
  );
}
