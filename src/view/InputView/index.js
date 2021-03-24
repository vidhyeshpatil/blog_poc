import React from "react";
import { string } from "prop-types";
import ImageIcon from "../../components/ImageIcon";
import InputBox from "../../components/InputBox";

function InputView({
  placeHolderText
}) {

  return (
    <div className = "input_wrapper">
      <ImageIcon />
      <InputBox placeHolderText = {placeHolderText} />
    </div>
  );
}

InputView.propTypes = {
  placeHolderText: string
}

export default InputView;