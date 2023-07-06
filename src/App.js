import React from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Feed  from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
    // bem convention
    <div className="app">
      
      {/* there are 3 components=>sidebar, middle(scrollable) and right-side.make three files for each */}

      <Sidebar />
      <Feed />
      <Widgets />
      
    </div>
  );
}

export default App;
