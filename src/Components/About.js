import React from "react";

export default function About(props) {
  return (
    <>
      <div className="container" style= {{color: props.mode === "dark" ? "white" : "#042743"}}>
        <h1 >{props.heading }</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style= {{
                  backgroundColor: props.mode === "dark" ? "grey" : "white",
                  color: props.mode === "dark" ? "white" : "#042743"
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyze your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style= {{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743"
            }}>
                Text.io gives you a way to analyze your text quickly and efficiently.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style= {{
                  backgroundColor: props.mode === "dark" ? "grey" : "white",
                  color: props.mode === "dark" ? "white" : "#042743"
                }}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style= {{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743"
            }}>
                It's totally free to use. So, Enjoy by minimizing your time and Analyze 
                your text with the ease.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style= {{
                  backgroundColor: props.mode === "dark" ? "grey" : "white",
                  color: props.mode === "dark" ? "white" : "#042743"
                }}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style= {{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743"
            }}>
                 Text.io works with every browser like Chrome, Firefox, Explorer, Opera etc. 
                 It suits to count of character as well as much more functionalities with the 
                 text you entered in the "Text Box". 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
