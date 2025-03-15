import React from "react";
import { useVklTheme } from "../context/VklThemeContext";

export default function VklThemeToggle() {
    const { theme, toggleTheme } = useVklTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === "light" ? "🌞 Chế độ Sáng" : "🌙 Chế độ Tối"}
        </button>
    );
}