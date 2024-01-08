import React from "react";
import PropTypes from "prop-types";
// import { DirectionDown } from "./DirectionDown";
// import { DirectionUp } from "./DirectionUp";
// import { State } from "./State";
// import { StatusAlert } from "./StatusAlert";
// import { StatusClear } from "./StatusClear";
// import "./style.css";

export const Input = ({ type, state, className }) => {
  return (
    <div className={`input ${className}`}>
      <div className={`label ${state}`}>LABEL</div>
      <div className={`textbox state-${state} ${type}`}>
        {(state === "active" ||
          state === "filled" ||
          state === "inactive" ||
          (state === "error" && type === "dropdown")) && (
          <div className="dropdown-field-data">
            {type === "dropdown" && <>Dropdown field data</>}

            {type === "text" && <>Text field data</>}
          </div>
        )}

        {state === "selected" && (
          <>
            <div className="text-field-data">
              {type === "text" && <>Text field data</>}

              {type === "dropdown" && (
                <>
                  <div className="text-wrapper">Dropdown field data</div>
                  <DirectionUp className="chevron" />
                </>
              )}
            </div>
            <div className="rectangle">
              {type === "dropdown" && (
                <>
                  <div className="text-fields">
                    <div className="div">Option data</div>
                    <div className="text-wrapper-2">Option data</div>
                    <div className="text-wrapper-2">Option data</div>
                  </div>
                  <div className="scrollbar" />
                </>
              )}
            </div>
          </>
        )}

        {type === "dropdown" && state === "error" && <StatusAlert className="instance-node" />}

        {((state === "active" && type === "dropdown") ||
          (state === "error" && type === "dropdown") ||
          (state === "filled" && type === "dropdown") ||
          (state === "inactive" && type === "dropdown")) && (
          <DirectionDown className="chevron" color={state === "inactive" ? "#DBDBDB" : "#404040"} />
        )}

        {type === "text" && state === "filled" && <StatusClear className="instance-node" />}

        {type === "text" && state === "error" && (
          <>
            <div className="text-wrapper-3">Text field data</div>
            <State className="instance-node" />
          </>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["dropdown", "text"]),
  state: PropTypes.oneOf(["inactive", "active", "filled", "selected", "error"]),
};
