"use client";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

const sections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateSection = () => {
      const position = window.scrollY + 160;
      let current = "";
      for (const { id } of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= position) current = id;
      }
      setActiveSection(current);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateSection);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const closeOnResize = () => {
      if (window.innerWidth >= 900) setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    window.addEventListener("resize", closeOnResize);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      window.removeEventListener("resize", closeOnResize);
    };
  }, [menuOpen]);

  function toggleTheme() {
    const isDark = document.documentElement.dataset.theme !== "light";
    document.documentElement.dataset.theme = isDark ? "light" : "dark";
    try {
      localStorage.setItem("isDarkMode", String(!isDark));
    } catch {
      /* The switch also works without storage. */
    }
  }

  return (
    <header ref={header} className="site-header">
      <div className="shell header-inner">
        <a
          className="wordmark"
          href="#home"
          onClick={() => setMenuOpen(false)}
          aria-label="Bryan Tan — back to top"
        >
          <span className="monogram" aria-hidden="true">
            b<span>.</span>
          </span>
          <span>
            BRYAN TAN<span className="wordmark-role">SOFTWARE ENGINEER</span>
          </span>
        </a>
        <nav
          id="main-navigation"
          className={`main-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label="Switch color theme"
            title="Switch color theme"
          >
            <Icon name="sun" className="theme-sun" />
            <Icon name="moon" className="theme-moon" />
          </button>
          <a className="header-cta" href="#contact">
            Let’s talk <Icon name="arrow-up-right" />
          </a>
          <button
            ref={menuButton}
            className="icon-button menu-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
