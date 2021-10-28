// import logo from "./logo.svg";
//import axios from "axios";
//import { Component } from "react/cjs/react.production.min";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, switchMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      switchMode("dark");
      document.body.style.backgroundColor = "#171717";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      switchMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* //Loads Navbar from Navbar function Component */}
      <Navbar mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />
      <div className="container my-4">
        <TextForm heading="MAGIXT EDITOR" mode={mode} showAlert={showAlert} />
      </div>
      {/* TextInput */}
    </>
  );
}

export default App;
