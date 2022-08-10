import { motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

const InputWithAdornment = React.forwardRef(function Index(
  {
    leftIcon,
    rightIcon,
    isError,
    helperText,
    inputClassName: inputStyles,
    containerClassName,
    className,
    ...props
  },
  ref
) {
  const containerStyles = twMerge(
    `flex items-center p-2 rounded-2xl border-2 gap-1`,
    className,
    isError ? "border-red-600" : ""
  );

  const _inputStyles = twMerge(
    `w-full outline-none placeholder:text-sm bg-[transparent]`,
    inputStyles
  );

  return (
    <div className={containerClassName || ""}>
      <div className={containerStyles}>
        {leftIcon}
        <div className="flex-1">
          <motion.input ref={ref} {...props} className={_inputStyles} />
        </div>
        {rightIcon}
      </div>
      <span className={`w-full  text-xs ${isError ? "text-red-600" : ""}`}>
        {helperText}
      </span>
    </div>
  );
});

export default InputWithAdornment;
