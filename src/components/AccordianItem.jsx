export default function AccordianItem({ index, title, description, imgSrc = null }) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${index}`}>
                <button className={`accordion-button ${index != 0 ? "collapsed" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={index == 0 ? "true" : "false"} aria-controls={`#collapse${index}`}>
                    <div className="lead fw-normal me-3">{title}</div>
                    <img src={imgSrc} alt={title} height={35} className="me-3" />
                </button>
            </h2>
            <div id={`collapse${index}`} className={`accordion-collapse collapse ${index == 0 ? "show" : ""}`} aria-labelledby={`heading${index}`} data-bs-parent="Accordian">
                <div className="accordion-body regular-text" dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
        </div>
    )
};