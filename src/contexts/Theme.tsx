import React, {
  useEffect,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface IThemeContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    const currentTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    localStorage.setItem("theme", currentTheme);
    return currentTheme;
  } else {
    return theme;
  }
};

const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = useState(getTheme);

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme);
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
