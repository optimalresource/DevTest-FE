import React from "react";

function ButtonComponent({
  label,
  onClick = () => {},
  variant = "devTest-Gigs",
  surface = "borderAndFilled",
  className,
  leftSpace = false,
  stretched = false,
  toggle = false,
  leftIcon = "",
  rightIcon = "",
  colorButton = "",
  size = "large",
  buttonShape = "round-corners",
  ...props
}) {
  const borderAndBackgroundColor =
    surface == "borderNoFill"
      ? getSolidBorder(variant)
      : getFilledAndBorder(variant);

  const addLeftSpace = leftSpace ? "leftSpace" : "";
  const addStretched = stretched ? "stretched" : "not-stretched";
  const addSize = size === "large" ? "large" : "small";
  const addToggle = toggle ? "toggle" : "";

  return (
    <button
      className={`${addSize} ${addToggle} ${addStretched} ${addLeftSpace} ${borderAndBackgroundColor} ${className} ${colorButton}`}
      onClick={onClick}
      {...props}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </button>
  );
}

const getSolidBorder = (variant) => {
  switch (variant) {
    case "devTest-Gigs":
      return "button-primary-gigs-solid";
    default:
      return "button-primary-gigs-solid";
  }
};

const getFilledAndBorder = (variant) => {
  switch (variant) {
    case "devTest-Gigs":
      return "button-primary-gigs-filled";
    default:
      return "button-primary-gigs-filled";
  }
};

export default ButtonComponent;
