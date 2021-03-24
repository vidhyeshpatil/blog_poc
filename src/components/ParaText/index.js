import React, { useState } from "react";
import { string } from "prop-types";

function ParaText({
  paraText
}) {

  // defaults set the lenth of the comment to display
  const [pText, setParaText] = useState(setTextValue(paraText.length/2));

  // initially display show more text
  const [showMoreText, onShowMoreText] = useState(true);

  // helps you to set till what length we need to display the text
  function setTextValue(end, start = 0) {
    return paraText.slice(start, end);
  }

  // display all emaining text & hide the show more button
  function onShowMoreClick() {
    onShowMoreText(false);

    setParaText(setTextValue(paraText.length));
  }

  // hides the text to initail state with show more button 
  function onShowLessClick() {
    onShowMoreText(true);

    setParaText(setTextValue(paraText.length/2));
  }

  return (
    <div className = "para_text_wrapper">
      <p>{pText} {(showMoreText) && <span onClick={onShowMoreClick}>...<a href>Show More</a></span>}</p>
      {(!showMoreText) && <div onClick={onShowLessClick}><a href>Show Less</a></div>}
    </div>
  );
}

ParaText.propTypes = {
  paraText: string
}

export default ParaText;