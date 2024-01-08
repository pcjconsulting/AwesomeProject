import React from "react-native";
import PropTypes from "prop-types";
// import "./style.css";

export const LoaderAnim = ({ state, className }) => {
  return (
    <div className={`loader-anim ${state} ${className}`}>
      <img
        className="ellipse-stroke"
        alt="Ellipse stroke"
        src={
          state === "two"
            ? "ellipse-8-stroke-2.svg"
            : state === "three"
            ? "ellipse-8-stroke-3.svg"
            : state === "four"
            ? "ellipse-8-stroke-4.svg"
            : state === "five"
            ? "ellipse-8-stroke-5.svg"
            : state === "six"
            ? "ellipse-8-stroke-6.svg"
            : state === "seven"
            ? "ellipse-8-stroke-7.svg"
            : state === "eight"
            ? "ellipse-8-stroke-8.svg"
            : state === "nine"
            ? "ellipse-8-stroke-9.svg"
            : state === "ten"
            ? "ellipse-8-stroke-10.svg"
            : state === "eleven"
            ? "ellipse-8-stroke-11.svg"
            : state === "twelve"
            ? "ellipse-8-stroke-12.svg"
            : state === "thirteen"
            ? "ellipse-8-stroke-13.svg"
            : state === "fourteen"
            ? "ellipse-8-stroke-14.svg"
            : state === "fifteen"
            ? "ellipse-8-stroke-15.svg"
            : state === "sixteen"
            ? "ellipse-8-stroke-16.svg"
            : state === "seventeen"
            ? "ellipse-8-stroke-17.svg"
            : state === "eighteen"
            ? "ellipse-8-stroke-18.svg"
            : state === "nineteen"
            ? "ellipse-8-stroke-19.svg"
            : state === "twenty"
            ? "ellipse-8-stroke-20.svg"
            : state === "twenty-one"
            ? "ellipse-8-stroke-21.svg"
            : state === "twenty-two"
            ? "ellipse-8-stroke-22.svg"
            : state === "twenty-three"
            ? "ellipse-8-stroke-23.svg"
            : state === "twenty-four"
            ? "ellipse-8-stroke-24.svg"
            : "ellipse-8-stroke.svg"
        }
      />
    </div>
  );
};

LoaderAnim.propTypes = {
  state: PropTypes.oneOf([
    "sixteen",
    "seventeen",
    "ten",
    "twelve",
    "twenty-one",
    "five",
    "eight",
    "twenty-two",
    "twenty-three",
    "four",
    "eighteen",
    "one",
    "thirteen",
    "twenty-four",
    "twenty",
    "three",
    "nine",
    "fourteen",
    "seven",
    "fifteen",
    "two",
    "nineteen",
    "eleven",
    "six",
  ]),
};
