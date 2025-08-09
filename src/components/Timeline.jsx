import TimelineItem from "./TimelineItem";

export default function Timeline({ items = [] }) {
  return (
    <ul className="timeline position-relative list-unstyled ps-4 m-0 pb-2">
      {items.map((item, index) => (
        <TimelineItem key={index} title={item.title} date={item.date} description={item.description} imgSrc={item.imgSrc} />
      ))}
    </ul>
  );
};