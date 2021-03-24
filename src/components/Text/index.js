import React from "react";
import { string, bool } from "prop-types";

function Text({
  text,
  isTextBold = false
}) {

  // Format text to bold depending on the props values
  let cust_class = (isTextBold) ? "text_bold" : "";

  return (
    <div className = {`text ${cust_class }`}>
      {text}
    </div>
  );
}

Text.propTypes = {
  text: string,
  isTextBold: bool
}

export default Text;