'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import DarkModeToggler from "./DarkModeToggler";

const pages = [
    { name: "About", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const savedIsDarkMode = localStorage.getItem('isDarkMode');
        const htmlElement = document.documentElement;
        if (savedIsDarkMode !== null) { // use local storage dark mode if exists
            const isDarkMode = savedIsDarkMode === 'true';

            setIsDarkMode(isDarkMode);
            if (isDarkMode) {
                htmlElement.setAttribute('data-bs-theme', 'dark');
            } else {
                htmlElement.removeAttribute('data-bs-theme');
            }
        } else { // else use html element attribute and update local storage
            const isDarkMode = htmlElement.getAttribute('data-bs-theme') === 'dark';
            setIsDarkMode(isDarkMode);
            localStorage.setItem('isDarkMode', isDarkMode.toString());
        }
    }, []);

    const toggleTheme = () => {
        const htmlElement = document.documentElement;
        const newIsDarkMode = !isDarkMode;

        if (newIsDarkMode) {
            htmlElement.setAttribute('data-bs-theme', 'dark');
        } else {
            htmlElement.removeAttribute('data-bs-theme');
        }

        setIsDarkMode(newIsDarkMode);
        localStorage.setItem('isDarkMode', newIsDarkMode.toString());
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top mb-4">
            <div className="container">
                <Link className="navbar-brand" href="/">bthk2151.dev</Link>

                <div>
                    <div className=" d-inline-block d-lg-none">
                        <DarkModeToggler isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                    </div>
                    <button
                        className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav ms-auto">
                        {pages.map((page, index) => (
                            <li className="nav-item" key={index}>
                                <Link className={`nav-link ${pathname === page.href ? 'fw-semibold' : ''}`} href={page.href}>
                                    {page.name}
                                </Link>
                            </li>))
                        }
                        <li className="nav-item d-none d-lg-block">
                            <DarkModeToggler isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}