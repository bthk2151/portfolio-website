export default function TimelineItem({ title, date, description, imgSrc = null }) {
  return (
    <li className="timeline-item mb-5">
      <div className="row">
        <div className="col-8">
          <h5 className="lead fw-normal">{title}</h5>
          <p className="regular-text text-muted mb-2">{date}</p>
        </div>
        <div className="col-4 d-flex justify-content-end">
          {imgSrc && (
            <img src={imgSrc} alt={title} className="timeline-img img-fluid rounded shadow-sm" />
          )}
        </div>
      </div>
      <p className="regular-text text-muted">{description}</p>
    </li>
  );
};