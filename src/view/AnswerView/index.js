import React from "react";
import { arrayOf, object } from "prop-types";
import { Card, Divider } from "antd";
import Text from "../../components/Text";
import ParaText from "../../components/ParaText";
import ImageIcon from "../../components/ImageIcon";
import InputView from "../InputView";

function AnswerView({
  answers
}) {

  return (
    <Card style={{ 
      width: 900, 
      margin: "25px auto", 
      backgroundColor: '#fff',
      padding: 20
    }}>
      {answers.map((curr, i) => {
        const title = `${curr.userDetails.firstName} ${curr.userDetails.lastName}`;
        const position = curr.userDetails.position;
        const placeHolderText = `Reply to ${curr.userDetails.firstName}`;

        return (
          <div key = {`reply_${i}`} className = "reply_wrapper">
            <div className = "answer_wrapper">
              <ImageIcon />
              <div className="user_details">
                <Text text = {title} isTextBold = {true} />
                <Text text = {position} />
              </div>
            </div>
            <ParaText paraText = {curr.comment} />
            <Divider type = "horizontal" />
            <InputView placeHolderText = {placeHolderText} />
          </div>
        );
      })}
    </Card>
  );
}

AnswerView.propTypes = {
  answers: arrayOf(object)
}

export default AnswerView;