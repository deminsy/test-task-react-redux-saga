import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { deleteUserRequested, showUserInfo } from "../actions/user-list";
const IconView = styled.div`
  width: 32px;
  height: 32px;
  margin-left: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  top: 20px;
  left: 20px;
  border-radius: 16px;
  margin-right: 10px;
`;
const Text = styled.span`
  color: #3c4560;
  font-weight: 600;
  opacity: 0.6;
  margin-top: 5px;
`;
const Container = styled.div`
  height: 40px;
  display: flex;
  margin: 15px 0;
  border-radius: 16px;
  cursor: pointer;
  align-items: center;
  background: #ddd;
  &:hover {
    background: #cccccc;
  }
`;
const Button = styled.button`
  align-self: flex-end;
  border-radius: 3px;
  margin: 1em;
  padding: 0.25em 1em;
  font-size: 1em;
  font-weight: 600;
  color: white;
  background: ${props => props.color || "lightgrey"};
`;

const Content = styled.div`
  padding-left: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const UserItemList = ({ userInfo, handleUpdateUser }) => {
  const { avatar, first_name, last_name, id } = userInfo;

  const dispatch = useDispatch();

  const handleUpdateClick = (event, id) => {
    event.stopPropagation();
    handleUpdateUser(id);
  };
  const handleDeleteClick = (event, id) => {
    event.stopPropagation();
    let isConfirmed = window.confirm("Delete user from list? Are you shure?");
    if (isConfirmed) dispatch(deleteUserRequested(id));
  };
  return (
    <Container
      onClick={() => {
        console.log("show");
        dispatch(showUserInfo(userInfo));
      }}
    >
      <IconView>
        <Avatar src={avatar} />
        <Text> {first_name}</Text>&nbsp;
        <Text> {last_name}</Text>
      </IconView>

      <Content>
        <Button color="#FFC361" onClick={event => handleUpdateClick(event, id)}>
          Update
        </Button>
        <Button color="#FF4054" onClick={event => handleDeleteClick(event, id)}>
          Delete
        </Button>
      </Content>
    </Container>
  );
};
