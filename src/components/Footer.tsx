import SocialIconLink from "./SocialIconLink";

export default function Footer() {
    return (
        <footer className="footer py-3 mt-3 footer-text">
            <div className="container d-flex justify-content-between align-items-center">
                <span className="text-muted">
                    © {new Date().getFullYear()} Bryan Tan Hoe Kin. All rights reserved.
                </span>

                <div>
                    <SocialIconLink iconClass="devicon-linkedin-plain" redirectUrl="https://www.linkedin.com/in/bthk2151/" />
                    <SocialIconLink iconClass="devicon-github-plain" redirectUrl="https://github.com/bthk2151" />
                </div>
            </div>
        </footer>
    )
}