import React from "react";

const ButtonComponent = React.forwardRef(function Button(
  {
    label,
    onClick = () => {},
    variant = "devTest-Gigs",
    surface = "borderAndFilled",
    className,
    leftSpace = false,
    stretched = false,
    toggle = false,
    leftIcon,
    rightIcon,
    colorButton = "",
    size = "large",
    buttonShape = "round-corners",
    minWidth = 1,
    ...props
  },
  ref
) {
  const borderAndBackgroundColor =
    surface == "borderNoFill"
      ? getSolidBorder(variant)
      : getFilledAndBorder(variant);

  const addLeftSpace = leftSpace ? "leftSpace" : "";
  const addStretched = stretched ? "stretched" : "not-stretched";
  const addSize = size;
  const addToggle = toggle ? "toggle" : "";

  return (
    <button
      className={`${addSize} ${addToggle} ${addStretched} ${addLeftSpace} ${borderAndBackgroundColor} ${className} ${colorButton}`}
      onClick={onClick}
      {...props}
      style={{ minWidth: minWidth + "px" }}
      ref={ref}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </button>
  );
});

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
