import "./App.css";
import Title from "./components/Title";
import Content from "./components/Contents";
import { Context, createContext, useState } from "react";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className="App">
        <Title />
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
