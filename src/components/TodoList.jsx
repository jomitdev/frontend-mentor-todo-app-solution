import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = ({ tasks, setTasks, decideMode }) => {
  const [filter, setFilter] = useState("all");
  const clearCompleted = () => {
    setTasks((prevTasks) => {
      return prevTasks.filter((el) => !el.completed);
    });
  };

  const changeFilter = (e) => {
    setFilter(e.target.name);
  };

  let todos = [];

  if (filter === "all") {
    todos = [];
    todos = tasks;
  } else if (filter === "active") {
    todos = [];
    todos = tasks.filter((task) => !task.completed);
  } else {
    todos = [];
    todos = tasks.filter((task) => task.completed);
  }

  todos = todos.map((task, index) => (
    <Todo
      key={index}
      tasks={tasks}
      task={task}
      setTasks={setTasks}
      decideMode={decideMode}
    />
  ));

  return (
    <div className="font-josefin pb-6">
      <div
        className={`rounded-t md:rounded ${decideMode(
          "md:bg-veryDarkDesaturatedBlue md:shadow-2xl",
          "md:bg-white"
        )}`}
      >
        <div
          className={`${decideMode(
            "bg-veryDarkDesaturatedBlue shadow-2xl",
            "bg-white"
          )} rounded-t md:rounded`}
        >
          {todos}
        </div>

        {tasks.length > 0 && (
          <div className="space-y-4">
            <div
              className={`flex justify-between rounded-b text-darkGrayishBlue p-3 ${decideMode(
                "bg-veryDarkDesaturatedBlue shadow-2xl",
                "bg-white"
              )}`}
            >
              <p className="text-darkGrayishBlue">
                {tasks.filter((task) => !task.completed).length} items left
              </p>
              <div className="hidden sm:flex sm:justify-center sm:space-x-4">
                <button
                  className={`${decideMode(
                    "hover:text-white",
                    "hover:text-veryDarkDesaturatedBlue"
                  )} ${
                    filter === "all"
                      ? "text-brightBlue hover:text-brightBlue"
                      : ""
                  }`}
                  onClick={changeFilter}
                  name="all"
                >
                  All
                </button>
                <button
                  className={`${decideMode(
                    "hover:text-white",
                    "hover:text-veryDarkDesaturatedBlue"
                  )} ${
                    filter === "active"
                      ? "text-brightBlue hover:text-brightBlue"
                      : ""
                  }`}
                  onClick={changeFilter}
                  name="active"
                >
                  Active
                </button>
                <button
                  className={`${decideMode(
                    "hover:text-white",
                    "hover:text-veryDarkDesaturatedBlue"
                  )} ${
                    filter === "completed"
                      ? "text-brightBlue hover:text-brightBlue"
                      : ""
                  }`}
                  onClick={changeFilter}
                  name="completed"
                >
                  Completed
                </button>
              </div>
              <button
                className={`text-darkGrayishBlue ${decideMode(
                  "hover:text-white",
                  "hover:text-veryDarkDesaturatedBlue"
                )}`}
                onClick={clearCompleted}
              >
                Clear Completed
              </button>
            </div>

            <div
              className={`sm:hidden mb-6 flex justify-center space-x-4 py-4 text-darkGrayishBlue rounded shadow-xl ${decideMode(
                "bg-veryDarkDesaturatedBlue",
                "bg-white"
              )}`}
            >
              <button
                className={`${decideMode(
                  "hover:text-white",
                  "hover:text-veryDarkDesaturatedBlue"
                )} ${
                  filter === "all"
                    ? "text-brightBlue hover:text-brightBlue"
                    : ""
                }`}
                onClick={changeFilter}
                name="all"
              >
                All
              </button>
              <button
                className={`${decideMode(
                  "hover:text-white",
                  "hover:text-veryDarkDesaturatedBlue"
                )} ${
                  filter === "active"
                    ? "text-brightBlue hover:text-brightBlue"
                    : ""
                }`}
                onClick={changeFilter}
                name="active"
              >
                Active
              </button>
              <button
                className={`${decideMode(
                  "hover:text-white",
                  "hover:text-veryDarkDesaturatedBlue"
                )} ${
                  filter === "completed"
                    ? "text-brightBlue hover:text-brightBlue"
                    : ""
                }`}
                onClick={changeFilter}
                name="completed"
              >
                Completed
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
