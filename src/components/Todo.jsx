import React from "react";
import closeIcon from "../assets/icon-cross.svg";

const Todo = ({ task, tasks, decideMode, setTasks }) => {
  const completeTask = () => {
    setTasks((prevTasks) => {
      return prevTasks.map((el) =>
        el.id === task.id ? { ...task, completed: !task.completed } : el
      );
    });
  };

  const deleteTask = () => {
    setTasks((prevTasks) => {
      return prevTasks.filter((el) => el.id !== task.id);
    });
  };
  return (
    <div>
      <div
        className={`flex rounded items-center p-4 ${decideMode(
          "bg-veryDarkDesaturatedBlue",
          "bg-white"
        )}`}
      >
        <button onClick={completeTask}>
          <div
            className={`w-[20px] h-[20px] rounded-full mr-2 ${
              !task.completed ? "bg-lightGrayishBlue" : ""
            } bg-gradient-to-r1 from-blue to-red relative flex justify-center items-center`}
          >
            <div
              className={`${decideMode(
                "bg-veryDarkDesaturatedBlue",
                "bg-white"
              )} rounded-full p-[9px] ${
                task.completed ? "bg-gradient-to-r from-blue to-red" : ""
              }`}
            ></div>
            {task.completed && (
              <div className="w-[11px] h-[9px] bg-check absolute top-[5px] left-[4px] bg-no-repeat"></div>
            )}
          </div>
        </button>

        <p
          className={`mr-auto truncate cursor-pointer ${decideMode(
            "text-white",
            "text-veryDarkBlue"
          )} ${task.completed ? "line-through opacity-30" : ""}`}
          onClick={completeTask}
        >
          {task.text}
        </p>
        <button onClick={deleteTask}>
          <img src={closeIcon} alt="" />
        </button>
      </div>
      <hr
        className={`${decideMode(
          "text-veryLightGray",
          "text-black"
        )} opacity-10`}
      />
    </div>
  );
};

export default Todo;
