// components/ThemeContext.js
import React, {
  createContext,
  useEffect,
  useContext,
  useState,
  ReactNode,
} from "react";

const ThemeContext = createContext({
  darkMode: "light",
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode; // Import ReactNode from "react"
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState<any>("");

  useEffect(() => {
    let currMode = window.localStorage.getItem("theme");
    setDarkMode(currMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevTheme: string) =>
      prevTheme === "light" ? "dark" : "light"
    );
    window.localStorage.setItem(
      //getting prev selected theme from local storage
      "theme",
      darkMode === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
