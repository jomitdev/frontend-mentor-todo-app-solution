import React, { useState } from "react";
import { nanoid } from "nanoid";

const CreateTodo = ({ decideMode, setTasks }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        {
          text: text,
          id: nanoid(),
          completed: false,
        },
      ];
    });
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div
          className={`flex rounded items-center p-4 ${decideMode(
            "bg-veryDarkDesaturatedBlue",
            "bg-white"
          )}`}
        >
          <div className="w-[20px] h-[20px] border border-lightGrayishBlue rounded-full bg-transparent mr-1"></div>
          <input
            className={`w-full px-2 rounded font-josefin focus:outline-none pt-1 ${decideMode(
              "placeholder:text-white",
              "placeholder:text-black"
            )} placeholder:opacity-50 focus:placeholder:opacity-100 ${decideMode(
              "bg-veryDarkDesaturatedBlue text-white",
              "bg-white text-veryDarkGrayishBlue"
            )}`}
            type="text"
            placeholder="Create a new todo"
            value={text}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
