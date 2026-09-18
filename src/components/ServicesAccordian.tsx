"use client";

import { useId, useState } from "react";
import { services } from "@/data/portfolio";
import Icon from "./Icon";
export default function ServicesAccordian() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const id = useId();

  return (
    <div className="services-list">
      {services.map((service, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${id}-trigger-${index}`;
        const panelId = `${id}-panel-${index}`;

        return (
          <div className={`service${isOpen ? " is-open" : ""}`} key={service.title}>
            <h3>
              <button
                className="service-toggle"
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="service-number">0{index + 1}</span>
                <span className="service-title">{service.title}</span>
                <Icon name="plus" />
              </button>
            </h3>
            <div
              className="service-panel"
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
              inert={!isOpen}
            >
              <div className="service-panel-inner">
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
