'use client';

interface DarkModeTogglerProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

export default function DarkModeToggler({ isDarkMode, toggleTheme }: DarkModeTogglerProps) {
    return (
        <button
            className="btn btn-link text-decoration-none darkmode-toggler"
            onClick={toggleTheme}
            aria-label="Toggle light / dark mode"
        >
            {isDarkMode ? '☀️' : '🌙'}
        </button>
    )
}