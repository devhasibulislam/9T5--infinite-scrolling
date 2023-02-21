import React from "react";

const Card = ({ comment }) => {
  const { email, body, name, id } = comment;

  return (
    <>
      <div className="card">
        <div className="card-header">{id + ": " + email}</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{body}</p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">{name}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default Card;
