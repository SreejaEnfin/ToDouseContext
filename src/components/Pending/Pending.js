import React, { useContext, useState } from "react";
import "./Pending.css";
import { DataContext } from "../../context/DataContext";
const Pending = () => {
  const { pending, setPending, setProgress, progress } =
    useContext(DataContext);
  const getIdtoProgress = (id) => {
    if (Array.isArray(pending)) {
      const updatedPending = pending.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isPending: false,
            isProgress: true,
          };
        }
        console.log(item);
        return item;
      });

      const progressItems = updatedPending.filter((item) => item.isProgress);
      setProgress(() => [...progress, ...progressItems]);
      setPending(updatedPending.filter((item) => !item.isProgress));
    } else {
      console.log("pending is not an array");
    }
  };
  console.log("after", progress);

  const pendingItems = pending.map((pendingItem) => (
    <li className="listPending" key={pendingItem.id}>
      {pendingItem.text}
      &nbsp; &nbsp;
      <i
        className="fa-regular fa-circle-right"
        onClick={() => getIdtoProgress(pendingItem.id)}
      ></i>
    </li>
  ));
  return (
    <div className="pendingBox">
      <h2>Pending Tasks</h2>
      <ul>{pendingItems}</ul>
    </div>
  );
};

export default Pending;
