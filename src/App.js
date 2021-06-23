import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { selectUser } from "./features/userSlice";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className='app'>
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <Sidebar />
          <Feed />
          {/* Right Side */}
        </div>
      )}
    </div>
  );
}

export default App;
