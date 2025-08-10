import AccordianItem from "./AccordianItem";

export default function Accordian({ items = [] }) {
    return (
        <div className="accordion" id="Accordian">
            {items.map((item, index) =>
                <AccordianItem
                    key={index}
                    index={index}
                    title={item.title}
                    description={item.description}
                    imgSrc={item.imgSrc} />
            )}
        </div>
    )
};

