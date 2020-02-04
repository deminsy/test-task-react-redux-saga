import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userListPageRequested,
  showCreateUserModal
} from "../actions/user-list";
import styled from "styled-components";
import { Loader } from "./UI/Loader/Loader";
import { UserList } from "./UserList";
import { Paginator } from "./UI/Paginator/Paginator";
import { UpdateUserForm } from "./UpdateUserForm";
import { CreateUserForm } from "./CreateUserForm";
import { UserInfo } from "./UserInfo";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
const Container = styled.div`
  margin-top: 80px;
  padding: 4em;
  width: 400px;
  justify-content: center;
  background: #efefef;
`;

const Button = styled.button`
  justify-content: center;
  width: 400px;
  border-radius: 3px;
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 600;
  color: grey;
  background: ${props => props.color || "lightgrey"};
`;

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userListPageRequested());
  }, []);

  const {
    loading,
    loaded,
    isUpdateModalShown,
    isCreateModalShown,
    isUserInfoShown
  } = useSelector(state => state);

  //   const onClick = () => dispatch(userListPageRequested());
  //   const createClickHandler = userInfo => {
  //     console.log("create");
  //     dispatch(createUserRequested(userInfo));
  //   };

  //   const updateClickHandler = () => {
  //     console.log("update");
  //     //dispatch(updateUserRequested({ first_name, last_name, email, avatar }));
  //   };

  const newUserHandler = () => {
    dispatch(showCreateUserModal());
  };

  return (
    <Wrapper>
      {loading ? <Loader /> : null}
      {loaded ? (
        <Container>
          <Paginator />
          <UserList />
          <Button color="#A9EB3B" onClick={newUserHandler}>
            New user
          </Button>
          {isUpdateModalShown ? (
            <UpdateUserForm isShown={isUpdateModalShown} />
          ) : null}
          {isCreateModalShown ? (
            <CreateUserForm isShown={isCreateModalShown} />
          ) : null}
          {isUserInfoShown ? <UserInfo isShown={isUserInfoShown} /> : null}
        </Container>
      ) : null}
    </Wrapper>
  );
};

export default Home;
