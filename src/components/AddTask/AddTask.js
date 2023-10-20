import React, { useContext, useEffect } from "react";
import "./AddTask.css";
import { DataContext } from "../../context/DataContext";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const { todoText, setTodoText, pending, setPending } =
    useContext(DataContext);
  const changeTodoText = (e) => {
    const uniqueId = uuidv4();
    setTodoText({
      ...todoText,
      text: e.target.value,
      isPending: true,
      id: uniqueId,
    });
  };

  const addTask = () => {
    setPending((prevPending) => [...prevPending, todoText]);
    console.log(pending);
  };

  useEffect(() => {
    console.log(pending);
  }, [pending]);

  return (
    <div className="todoText">
      <input type="text" value={todoText.text} onChange={changeTodoText} />
      <button type="button" disabled={todoText === ""} onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
