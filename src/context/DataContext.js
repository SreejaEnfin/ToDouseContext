import React, { createContext, useState } from "react";

// Create a context
export const DataContext = createContext();

// Create a provider component
export function DataProvider({ children }) {
  const [todoText, setTodoText] = useState({
    id: "",
    task: "",
    isPending: false,
    isProgress: false,
    isComplete: false,
  });
  const [pending, setPending] = useState([]);
  const [progress, setProgress] = useState([]);
  const [complete, setComplete] = useState([]);

  return (
    <DataContext.Provider
      value={{
        todoText,
        setTodoText,
        pending,
        setPending,
        progress,
        setProgress,
        complete,
        setComplete,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
