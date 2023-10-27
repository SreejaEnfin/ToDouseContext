import React, { useContext, useState } from "react";
import "./Progress.css";
import { DataContext } from "../../context/DataContext";

const Progress = () => {
  const { progress, setComplete, complete, setProgress, setPending, pending } =
    useContext(DataContext);
  const getIdtoComplete = (id) => {
    if (Array.isArray(progress)) {
      const updatedProgress = progress.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isProgress: false,
            isComplete: true,
          };
        }
        console.log(item);
        return item;
      });

      const completeItems = updatedProgress.filter((item) => item.isComplete);
      setComplete(() => [...complete, ...completeItems]);
      setProgress(updatedProgress.filter((item) => !item.isComplete));
    } else {
      // console.log("pending is not an array");
    }
  };
  // console.log("after", progress);

  const getIdtoPending = (id) => {
    if (Array.isArray(progress)) {
      const updatedProgress = progress.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isProgress: false,
            isPending: true,
          };
        }
        return item;
      });
      const pendingItems = updatedProgress.filter((item) => item.isPending);
      setPending(() => [...pending, ...pendingItems]);
      setProgress(updatedProgress.filter((item) => !item.isPending));
    } else {
      // console.log("pending is not an array");
    }
  };

  const progressItems = progress.map((progressItem) => (
    <li className="listprogress" key={progressItem.id}>
      {progressItem.text}
      &nbsp; &nbsp;
      <i
        className="fa-regular fa-circle-right"
        onClick={() => getIdtoComplete(progressItem.id)}
      ></i>
      <i
        className="fa-regular fa-circle-left"
        onClick={() => getIdtoPending(progressItem.id)}
      ></i>
    </li>
  ));

  return (
    <div className="progressBox">
      <h2>In Progress Tasks</h2>
      <ul>{progressItems}</ul>
    </div>
  );
};

export default Progress;
