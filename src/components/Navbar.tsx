'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
    { name: "About", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top mb-4">
            <div className="container">
                <Link className="navbar-brand" href="/">bthk2151.dev</Link>

                <button
                    className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav ms-auto">
                        {pages.map((page, index) => (
                            <li className="nav-item" key={index}>
                                <Link className={`nav-link ${pathname === page.href ? 'text-dark fw-semibold' : ''}`} href={page.href}>
                                    {page.name}
                                </Link>
                            </li>))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}