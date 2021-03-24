import React from "react";
import { Card, Divider } from "antd";
import data from "../../data/config.json";
import Text from "../../components/Text";
import InputView from "../InputView";
import AnswerView from "../AnswerView";

function QuestionListView() {
  const { caption_title, ques_header, answers } = data.ques_list;
  const displayNoOfAnswers = `${answers.length} answers`;
  const placeHolderText = "Add An Answer";

  return (
    <React.Fragment>
      <Card style={{ 
        width: 900, 
        margin: "25px auto", 
        backgroundColor: '#fff',
        padding: 20
      }}>
        <Text text = {caption_title} />
        <Text text = {ques_header} isTextBold = {true} />
        <Text text = {displayNoOfAnswers} />
        <Divider type = "horizontal" />
        <InputView placeHolderText = {placeHolderText} />
      </Card>
      <AnswerView answers = {answers} />
    </React.Fragment>
  );
}

export default QuestionListView;
