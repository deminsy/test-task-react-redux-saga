import React, { useState } from "react";
import Modal from "./UI/Modal";
import { hideCreateUserModal, createUserRequested } from "../actions/user-list";
import { useDispatch, useSelector } from "react-redux";
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
const Title = styled.span`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: 1000;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 100%;
  color: ${props => props.color || "#3c4560"};
  background: lightgrey;
  border: none;
  border-radius: 3px;
`;

export const CreateUserForm = ({ isShown }) => {
  const dispatch = useDispatch();

  const [first_name, setFisrtName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleFisrtName = event => {
    setFisrtName(event.target.value);
  };
  const handleLastName = event => {
    setLastName(event.target.value);
  };
  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handleAvatar = event => {
    setAvatar(event.target.value);
  };
  const createClickHandler = () => {
    dispatch(createUserRequested());
  };

  return (
    <Modal
      show={isShown}
      handleClose={() => {
        dispatch(hideCreateUserModal({ email, avatar, first_name, last_name }));
      }}
    >
      <Title>CREATE USER</Title>
      <label>
        Fisrt Name:
        <Input
          type="text"
          placeholder="First Name"
          value={first_name}
          onChange={handleFisrtName}
        />
      </label>
      <label>
        Last Name:
        <Input
          type="text"
          placeholder="Last Name"
          value={last_name}
          onChange={handleLastName}
        />
      </label>
      <label>
        email:
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmail}
        />
      </label>
      <label>
        avatar url:
        <Input
          type="text"
          placeholder="avatar"
          value={avatar}
          onChange={handleAvatar}
        />
      </label>
      <Button color="#A9EB3B" onClick={createClickHandler}>
        Create User
      </Button>
    </Modal>
  );
};
