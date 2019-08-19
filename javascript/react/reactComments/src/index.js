import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={faker.name.findName()}
          avatar={faker.image.avatar()}
          date={faker.date.past()}
          content={faker.lorem.sentences()}
        />
      </ApprovalCard>
      <CommentDetail
        author={faker.name.findName()}
        avatar={faker.image.avatar()}
        date={faker.date.past()}
        content={faker.lorem.sentences()}
      />
      <CommentDetail
        author={faker.name.findName()}
        avatar={faker.image.avatar()}
        date={faker.date.past()}
        content={faker.lorem.sentences()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
