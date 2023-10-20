import React, { useContext, useState } from "react";
import "./Complete.css";
import { DataContext } from "../../context/DataContext";

const Progress = () => {
  const { progress, setComplete, complete, setProgress } =
    useContext(DataContext);
  //   const getIdtoComplete = (id) => {
  //     //   if (Array.isArray(progress)) {
  //     //     const updatedComplete = progress.map((item) => {
  //     //       if (item.id === id) {
  //     //         return {
  //     //           ...item,
  //     //           isProgress: false,
  //     //           isComplete: true,
  //     //         };
  //     //       }
  //     //       return item;
  //     //     });
  //     //     console.log("before", progress);
  //     //     setComplete((prevState) => [...prevState, updatedComplete]);
  //     //   } else {
  //     //     console.log("progress is not an array");
  //     //   }
  //     // };

  //     if (Array.isArray(progress)) {
  //       const updatedProgress = progress.map((item) => {
  //         if (item.id === id) {
  //           return {
  //             ...item,
  //             isProgress: false,
  //             isComplete: true,
  //           };
  //         }
  //         console.log(item);
  //         return item;
  //       });

  //       const completeItems = updatedProgress.filter((item) => item.isComplete);
  //       setComplete(() => [...complete, ...completeItems]);
  //       setProgress(updatedProgress.filter((item) => !item.isProgress));
  //     } else {
  //       console.log("pending is not an array");
  //     }
  //   };
  console.log("after", complete);

  const completeItems = complete.map((completeItem) => (
    <li className="listComplete" key={completeItem.id}>
      {completeItem.text}
      &nbsp; &nbsp;
      {/* <i
        className="fa-regular fa-circle-right"
        onClick={() => getIdtoComplete(completeItem.id)}
      ></i> */}
    </li>
  ));

  return (
    <div className="completeBox">
      <h2>In Progress Tasks</h2>
      <ul>{completeItems}</ul>
    </div>
  );
};

export default Progress;
