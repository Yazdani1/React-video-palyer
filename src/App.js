import React,{createContext,useState} from "react";
import Video from "./components/Video";
import "./App.css";
import Header from "./components/Header";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="main-app" id={theme}>
        <Header/>
        <Video toggleTheme={toggleTheme} theme={theme} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
