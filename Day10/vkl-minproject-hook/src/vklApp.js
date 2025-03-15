
import { VklThemeProvider } from "./context/VklThemeContext";
import VklTodoList from "./components/VklTodoList";
import VklThemeToggle from "./components/VklThemeToggle";
import "./index.css";
import React from 'react';

export default function VklApp() {
  return (
    <VklThemeProvider>
      <div className="nht-app">
        <h1>Quản Lý Công Việc</h1>
        <VklThemeToggle />
        <VklTodoList />
      </div>
    </VklThemeProvider>
  );
}