import React,{createContext,useState} from "react";
import Video from "./components/Video";
import "./App.css";
export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="main-app" id={theme}>
        <Video toggleTheme={toggleTheme} theme={theme} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
