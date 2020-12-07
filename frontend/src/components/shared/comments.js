import React from "react";

const Comment = ({ commentBox }) => {
  console.log(commentBox)
  return <div ref={commentBox} className="comments"></div>;
};

export default Comment;
