import SocialIconLink from "./SocialIconLink";

export default function Footer() {
  return (
    <footer className="bg-light py-3 mt-2">
      <div className="container d-flex justify-content-between align-items-center">
        <span className="text-muted">
          © {new Date().getFullYear()} Bryan Tan Hoe Kin. All rights reserved.
        </span>

        <div>
          <SocialIconLink iconClass="devicon-linkedin-plain" redirectUrl="https://my.linkedin.com/in/bryan-tan-hoe-kin-60085b1b1" />
          <SocialIconLink iconClass="devicon-github-plain" redirectUrl="https://github.com/bthk2151" />
        </div>
      </div>
    </footer>
  );
}