import { services } from "@/data/portfolio";
import Icon from "./Icon";
export default function ServicesAccordian() {
  return (
    <div className="services-list">
      {services.map((service, index) => (
        <details
          className="service"
          name="services"
          key={service.title}
          open={index === 0}
        >
          <summary>
            <span className="service-number">0{index + 1}</span>
            <h3>{service.title}</h3>
            <Icon name="plus" />
          </summary>
          <p>{service.description}</p>
        </details>
      ))}
    </div>
  );
}
