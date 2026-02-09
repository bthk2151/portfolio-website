import Image, { StaticImageData } from "next/image";

interface ContactButtonProps {
    text: string;
    imgSrc: StaticImageData;
    redirectUrl: string;
}

export default function ContactButton({ text, imgSrc, redirectUrl }: ContactButtonProps) {
    return (
        <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="btn-contact btn d-flex align-items-center">
            <Image src={imgSrc} alt={text} height={30} className="me-2" />
            <span className="lead">{text}</span>
        </a>
    )
}