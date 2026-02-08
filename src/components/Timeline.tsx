import Image, { StaticImageData } from "next/image";

interface TimelineProps {
    items?: TimelineItemProps[];
}

interface TimelineItemProps {
    title: string;
    date: string;
    description: string;
    imgSrc?: StaticImageData | null;
}

export default function Timeline({ items = [] }: TimelineProps) {
    return (
        <ul className="timeline position-relative list-unstyled ps-4 m-0 pb-2">
            {items.map((item, index) => (
                <TimelineItem key={index} title={item.title} date={item.date} description={item.description} imgSrc={item.imgSrc} />
            ))}
        </ul>
    );
};

function TimelineItem({ title, date, description, imgSrc = null }: TimelineItemProps) {
    return (
        <li className="timeline-item mb-5">
            <div className="row">
                <div className="col-8">
                    <h5 className="lead fw-normal">{title}</h5>
                    <p className="regular-text text-muted mb-2">{date}</p>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    {imgSrc && (
                        <Image src={imgSrc} alt={title} className="timeline-img img-fluid rounded shadow-sm" />
                    )}
                </div>
            </div>
            <p className="regular-text text-muted">{description}</p>
        </li>
    );
};