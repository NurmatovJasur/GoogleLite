import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Routess } from "./components/ROutes";
function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (

      <div className={darkTheme ? "dark" : ""}>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen flex flex-col">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <div className="flex-1 max-w-[1200px] w-full m-auto px-[15px]">
            <Routess />
          </div>
          <Footer />
        </div>
      </div>

  );
}

export default App;
