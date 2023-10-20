import React from "react";
import "./App.css";
import { DataProvider } from "./context/DataContext";
import AddTask from "./components/AddTask/AddTask";
import Pending from "./components/Pending/Pending";
import Progress from "./components/Inprogress/Progress";
import Complete from "./components/Completed/Complete";

function App() {
  return (
    <div>
      <DataProvider>
        <AddTask />
        <div className="displayClass">
          <Pending />
          <Progress />
          <Complete />
        </div>
      </DataProvider>
    </div>
  );
}

export default App;
