import Icon from "./Icon";
export default function Footer() {
  return (
    <footer className="site-footer shell">
      <a
        className="footer-signature"
        href="#home"
        aria-label="Bryan Tan — back to top"
      >
        Bryan Tan<span>.</span>
      </a>
      <p>© {new Date().getFullYear()} Bryan Tan Hoe Kin</p>
      <div className="footer-links">
        <a
          href="https://github.com/bthk2151"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <Icon name="arrow-up-right" />
        </a>
        <a
          href="https://www.linkedin.com/in/bthk2151/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <Icon name="arrow-up-right" />
        </a>
        <a href="#home">
          Back to top <Icon name="arrow-up-right" />
        </a>
      </div>
    </footer>
  );
}
