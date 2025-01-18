"use client";
import { useTheme } from "@/hooks/context/ThemeContext";
import React, { useEffect, useState } from "react";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
};

export default ToggleTheme;
