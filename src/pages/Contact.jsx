import Accordian from "../components/Accordian";
import imgSoftware from '../assets/services/software.png';
import imgAutomation from '../assets/services/automation.png';
import imgData from '../assets/services/data.png';
import imgIntegrated from '../assets/services/integrated.png';
import Divider from "../components/Divider";

const servicesAccordianData = [
  {
    title: "Product Development & Maintenence",
    description: "From concept to launch, I craft bespoke, 0-to-1 software solutions, tailored to your vision and provide ongoing support to ensure they stay actively up-to-date.",
    imgSrc: imgSoftware
  },
  {
    title: "Automation & Workflow Optimization",
    description: "Optimize your operations with intelligent automation and custom-built tools designed to save time, reduce errors, and boost productivity.",
    imgSrc: imgAutomation
  },
  {
    title: "Data Solutions",
    description: "From raw data to actionable insights — I will collaborate with a partner who specializes in designing pipelines, structuring data, and building tools to help you harness the full power of your information.",
    imgSrc: imgData
  },
  {
    title: "Integrated Solutions",
    description: "Need a mix of the above? I offer tailored combinations that align with your business needs — whether it’s a custom dashboard, backend system, or full digital transformation.",
    imgSrc: imgIntegrated
  }
];

export default function Contact() {
  return (
    <div className="container">
      {/* Services */}
      <div className="row align-items-center mb-4">
        <div className="col-12 col-md-4 px-4 px-md-2 mb-3 mb-md-0 text-center text-md-start">
          <h1 className="display-6">Services</h1>
          <p className="lead mb-4 mb-md-0">
            Like what you see? I offer a range of solutions development services and am available to take on projects outside my regular working hours.
          </p>
        </div>
        <div className="col-12 col-md-8 px-2">
          <Accordian items={servicesAccordianData} />
        </div>
      </div>

      <Divider />

      {/* Contact */}
      <div className="row align-items-center">
        <div className="col-12 px-2 text-center">
          <h1 className="display-6 mb-3">Let's Get In Touch</h1>
          <p className="lead mb-4">Don't be a stranger — conect with me on my socials below!</p>

        </div>
      </div>
    </div>
  );
}