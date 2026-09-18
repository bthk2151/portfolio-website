import Image from "next/image";
import { career } from "@/data/portfolio";
export default function Timeline() {
  return (
    <ol className="career-list">
      {career.map((item, index) => (
        <li className="career-item" key={item.company}>
          <div className="career-date">
            <span className={`career-dot${index === 0 ? " is-current" : ""}`} />
            <span>{item.date}</span>
          </div>
          <div className="career-content">
            <div className="career-heading">
              <div>
                <p className="eyebrow">{item.domain}</p>
                <h3>{item.company}</h3>
                <p className="career-role">{item.title}</p>
              </div>
              <div className="company-logo">
                <Image
                  src={item.image}
                  alt={`${item.company} logo`}
                  width={52}
                  height={52}
                />
              </div>
            </div>
            <p className="career-description">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
