import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className='app'>
      <Header />
      {/* App Body */}
      <div className='app__body'>
        {/* Side Bar */}
        <Sidebar />
        {/* Feed */}
        {/* Right Side */}
      </div>
    </div>
  );
}

export default App;
