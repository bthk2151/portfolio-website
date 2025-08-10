export default function ContactButton({ text, imgSrc, redirectUrl }) {
    return (
        <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark d-flex align-items-center">
            <img src={imgSrc} alt={text} height={30} className="me-2" />
            <span className="lead">{text}</span>
        </a>
    )
}