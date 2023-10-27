import React, { useContext } from "react";
import "./Complete.css";
import { DataContext } from "../../context/DataContext";

const Progress = () => {
  const { progress, setComplete, complete, setProgress } =
    useContext(DataContext);
  const getIdtoProgress = (id) => {
    if (Array.isArray(progress)) {
      const updatedComplete = complete.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isProgress: true,
            isComplete: false,
          };
        }
        return item;
      });
      const progressItems = updatedComplete.filter((item) => item.isProgress);
      setComplete(updatedComplete.filter((item) => !item.isProgress));
      setProgress(() => [...progress, ...progressItems]);
    }
  };

  const completeItems = complete.map((completeItem) => (
    <li className="listComplete" key={completeItem.id}>
      {completeItem.text}
      &nbsp; &nbsp;
      <i
        className="fa-regular fa-circle-left"
        onClick={() => getIdtoProgress(completeItem.id)}
      ></i>
    </li>
  ));

  return (
    <div className="completeBox">
      <h2>Completed Tasks</h2>
      <ul>{completeItems}</ul>
    </div>
  );
};

export default Progress;
