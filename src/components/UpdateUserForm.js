import React, { useState } from "react";
import Modal from "./UI/Modal";
import { hideUdateUserModal, updateUserRequested } from "../actions/user-list";
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
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 100%;
  color: ${props => props.color || "#3c4560"};
  background: lightgrey;
  border: none;
  border-radius: 3px;
`;
const Title = styled.span`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: 1000;
`;

export const UpdateUserForm = ({ isShown }) => {
  const dispatch = useDispatch();
  const { first_name, last_name, avatar, email, id } = useSelector(
    state => state.userInfo
  );
  const [l_first_name, setFisrtName] = useState(first_name);
  const [l_last_name, setLastName] = useState(last_name);
  const [l_email, setEmail] = useState(email);
  const [l_avatar, setAvatar] = useState(avatar);

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
  const updateClickHandler = () => {
    dispatch(
      updateUserRequested({
        id,
        first_name: l_first_name,
        last_name: l_last_name,
        avatar: l_avatar,
        email: l_email
      })
    );
  };

  return (
    <Modal
      show={isShown}
      handleClose={() => {
        dispatch(hideUdateUserModal());
      }}
    >
      <Title>UPDATE USER</Title>
      <label>
        Fisrt Name:
        <Input type="text" value={l_first_name} onChange={handleFisrtName} />
      </label>
      <label>
        Last Name:
        <Input type="text" value={l_last_name} onChange={handleLastName} />
      </label>
      <label>
        email:
        <Input type="email" value={l_email} onChange={handleEmail} />
      </label>
      <label>
        avatar url:
        <Input type="text" value={l_avatar} onChange={handleAvatar} />
      </label>
      <Button color="#FFC361" onClick={updateClickHandler}>
        Update User
      </Button>
    </Modal>
  );
};
