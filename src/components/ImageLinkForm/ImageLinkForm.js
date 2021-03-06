import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detect faces in your image. Give it a try"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="border-none f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="border-none w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
