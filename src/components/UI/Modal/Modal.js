import React from "react";
import "./Modal.css";
import styled from "styled-components";
const Button = styled.button`
  border-radius: 3px;
  margin: 1em;
  padding: 0.25em 1em;
  font-size: 1em;
  font-weight: 600;
  color: white;
  background: ${props => props.color || "lightgrey"};
`;

export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <Button color="#427780" onClick={handleClose}>
          Close
        </Button>
      </section>
    </div>
  );
};
