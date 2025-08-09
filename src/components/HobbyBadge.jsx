export default function HobbyBadge({ text, imgSrc }) {
  return (
    <div className="badge bg-dark d-inline-flex align-items-center justify-content-between px-3 py-2 me-2 mb-2">
      <span className="regular-text me-2">{text}</span>
      <img src={imgSrc} alt={text} height={25} />
    </div>
  );
};