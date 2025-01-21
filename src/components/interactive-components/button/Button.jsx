import React from "react";
import styles from "./Button.module.css";

const Button = ({
  className = "",
  label = "Button",
  border = "1px solid black",
  prefix = null,
  postfix = null,
  backgroundColor = "white",
  labelColor = "black",
  ...props
}) => {
  const buttonStyle = {
    border,
    backgroundColor,
    color: labelColor,
  };

  return (
    <button
      className={`${styles.button} ${className}`}
      style={buttonStyle}
      {...props}
    >
      {prefix && <span className={styles.prefix}>{prefix}</span>}
      {label}
      {postfix && <span className={styles.postfix}>{postfix}</span>}
    </button>
  );
};

export default Button;
