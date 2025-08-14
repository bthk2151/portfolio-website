import { track } from "@vercel/analytics/react";

export default function ContactButton({ text, imgSrc, redirectUrl }) {
    const trackContactClick = (e) => {
        track("contact_button_clicked", { type: text })
    }

    return (
        <a href={redirectUrl} onClick={trackContactClick} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark d-flex align-items-center">
            <img src={imgSrc} alt={text} height={30} className="me-2" />
            <span className="lead">{text}</span>
        </a>
    )
}