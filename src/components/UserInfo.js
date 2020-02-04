import React, { useState } from "react";
import Modal from "./UI/Modal";
import { hideUserInfo } from "../actions/user-list";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const IconView = styled.div`
  width: 32px;
  height: 32px;
  margin-left: 4px;
  justify-content: center;
  align-items: center;
`;
const Avatar = styled.img`
  width: 140px;
  height: 140px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 16px;
`;
const Text = styled.span`
  color: #3c4560;
  font-weight: 600;
  opacity: 0.6;
  margin-top: 5px;
`;
const Email = styled.p`
  color: #3c4560;
  font-weight: 800;
  opacity: 0.8;
  margin-top: 5px;
`;
const Container = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  margin: 15px 0;
  border-radius: 16px;
  align-items: flex-end;
  overflow: hidden;
`;

const Content = styled.div`
  padding-left: 10px;
  padding-top: 20px;
`;

export const UserInfo = ({ isShown }) => {
  const dispatch = useDispatch();
  const { avatar, first_name, last_name, email } = useSelector(
    state => state.userInfo
  );

  return (
    <Modal show={isShown} handleClose={() => dispatch(hideUserInfo())}>
      <Container
        onClick={() => {
          console.log("show");
        }}
      >
        <IconView>
          <Avatar src={avatar} />
        </IconView>

        <Content>
          <Text> {first_name}</Text>
          <Text> {last_name}</Text>
          <Email>{email}</Email>
        </Content>
      </Container>
    </Modal>
  );
};
