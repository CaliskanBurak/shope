import React from "react";

import "./custom-button.style.scss";

// import { CustomButtonContainer } from './custom-button.style'

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
     {children}
  </button>
);

export default CustomButton;
