import React from "react-native";
import { Input } from "./Input";
import { LoaderAnim } from "./LoaderAnim";
//import { TypeTextStateWrapper } from "./TypeTextStateWrapper";
import "./style.css";

export const LoginFrame = () => {
  return (
    <div className="login-frame">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="android-small">
            <div className="text-wrapper-3">Welcome to CrisprMaestro.</div>
            <button className="button">
              <div className="text-wrapper-4">Log In</div>
            </button>
            <div className="text-wrapper-5">Please Log in.</div>
            <Input className="password" state="selected" text="PASSWORD" type="text" />
            <Input className="username" state="selected" text="USER NAME" type="text" />
          </div>
          <LoaderAnim
            className="loader-anim-instance"
            ellipseStroke="ellipse-8-stroke-3.svg"
            ellipseStrokeClassName="design-component-instance-node"
            state="one"
          />
        </div>
      </div>
    </div>
  );
};
