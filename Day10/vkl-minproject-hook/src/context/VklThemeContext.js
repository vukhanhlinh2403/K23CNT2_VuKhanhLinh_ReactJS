import React, { createContext, useState, useContext, useEffect } from "react";

const VklThemeContext = createContext();

export function VklThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"; // Lấy theme từ localStorage hoặc mặc định là "light"
    });

    useEffect(() => {
        // Xóa class cũ trước khi thêm class mới để tránh bị chồng chéo
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme);

        // Lưu theme vào localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <VklThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </VklThemeContext.Provider>
    );
}

export function useVklTheme() {
    const context = useContext(VklThemeContext);
    if (!context) {
        throw new Error("useNhtTheme phải được sử dụng bên trong <VklThemeProvider>");
    }
    return context;
}