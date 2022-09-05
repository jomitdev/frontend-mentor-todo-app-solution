import React, { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [tasks, setTasks] = useState([]);

  const changeMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  function decideMode(dark, light) {
    return darkMode ? dark : light;
  }

  useEffect(() => {
    document.body.classList = "";
    document.body.classList.add(
      decideMode("bg-veryDarkBlue", "bg-veryLightGrayishBlue")
    );
    window.addEventListener("scroll", () =>
      console.log(document.body.scrollHeight)
    );
  }, [darkMode]);

  return (
    <div className="h-screen">
      <div
        className={`absolute z-10 w-full h-2/5 bg-cover bg-no-repeat ${decideMode(
          "bg-mobile-dark",
          "bg-mobile-light"
        )} ${decideMode("sm:bg-desktop-dark", "sm:bg-desktop-light")}`}
      ></div>
      <div className={`flex justify-center h-screen`}>
        <div className="w-screen z-20 mt-12 mx-5 md:mx-24 lg:mx-48 xl:mx-96 2xl:mx-[500px] 2xl:max-w-[700px] space-y-8">
          <div className="flex justify-between">
            <h1 className="text-white text-3xl font-bold tracking-[0.4em] lg:text-5xl">
              TODO
            </h1>
            <button>
              <img
                className="w-[26px] h-[26px]"
                src={darkMode ? sun : moon}
                alt=""
                onClick={changeMode}
              />
            </button>
          </div>
          <CreateTodo decideMode={decideMode} setTasks={setTasks} />
          <TodoList tasks={tasks} setTasks={setTasks} decideMode={decideMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
