import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  // text ="snvcjn " // Wrong way to change state
  // setText("new text") // Right wy to change state
  const handleUpClick = () => {
    console.log("Clicked on uppercase" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Changed to UpperCase", "success")
  };
  const handleLoClick = () => {
    console.log("Clicked on lowercase" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Changed to LowerCase", "success")
  };
  const handleonChange = (event) => {
    console.log("Clicked onChange");
    setText(event.target.value);
  };

  const handlespeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking your Text", "success")
  };

  const handleinverseclick = () => {
    console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
    props.showAlert("Your Text Successfuly Inversed", "success")
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((error) => {
        alert("Error copying text!");
      });
      props.showAlert("Your Text Successfuly Copied", "success")
  };

  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Spaces Removed", "success")
  };

  // This method is for not counting the spaces as words:  
  const wordCount = (text)=>{
    let regex = /\s+\S+/;
    let numOfWords = text.split(regex);
    return numOfWords.length;
  }


  return (
    <>
      <div className="container" style= {{color: props.mode === "dark" ? "white" : "#042743"}}>
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            id="mybox"
            rows="10"
            style= {{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743"
            }}
          ></textarea>
        </div>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-secondary mx-3" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button onClick={handlespeak} className="btn btn-warning mx-3 ">
        Speak🔊
      </button>
      <button
        className="btn btn-info
       mx-3"
        onClick={handleinverseclick}
      >
        Inverse Click
      </button>
      <button className="btn btn-danger mx-3" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
      <div className="container my-3" style= {{color: props.mode === "dark" ? "white" : "#042743"}}>
        <h1>Your Text Summary is here </h1>
        <p>
        {text===""? 0 : wordCount(text)} Words {text.length} Characters
        <p>{ text===""? 0 * 0.008 : wordCount(text) * 0.008} Minutes read</p>
        </p>
        <h2>Preview</h2>
        <p>
          {text.length>0?text:"Enter your text above in the text box to preview it here "}
        </p>
      </div>
    </>
  );
}
