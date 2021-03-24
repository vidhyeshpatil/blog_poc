import React from "react";
import { string } from "prop-types";
import { Input } from "antd";

function InputBox({
  placeHolderText
}) {

  return (
    <div className = "input_text_wrapper">
      <Input placeholder={placeHolderText} />
    </div>
  );
}

InputBox.propTypes = {
  placeHolderText: string
}

export default InputBox;
