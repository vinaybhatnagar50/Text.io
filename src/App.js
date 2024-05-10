import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message, // here we can also use message: message
      type: type,
    });
    setTimeout(() => {
      setAlert(" ");
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been Activate", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Activate", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="text.io"
          aboutText="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}
                  showAlert={showAlert}
                  heading="About us" />} />
            <Route
              exact path="/"
              element={
                <Textform
                  mode={mode}
                  showAlert={showAlert}
                  heading="Enter the text to analyze : "
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
