import React from "react";
import "./App.css";
import ReactSortableTree from "./components/react-sortable-tree";
import AntTreeView from "./components/AntTreeview/AntTreeview";

function App() {
  return (
    <div className="App">
      <div>
        {/* <ReactSortableTree style={{ height: "20rem" }} /> */}
        <AntTreeView/>
      </div>
    </div>
  );
}

export default App;
