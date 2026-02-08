import Image, { StaticImageData } from "next/image";

interface HobbyBadgeProps {
    text: string;
    imgSrc: StaticImageData;
}

export default function HobbyBadge({ text, imgSrc }: HobbyBadgeProps) {
    return (
        <div className="badge hobby-badge d-inline-flex align-items-center justify-content-between px-3 py-2 me-2 mb-2">
            <span className="regular-text me-2">{text}</span>
            <Image src={imgSrc} alt={text} height={25} />
        </div>
    );
};