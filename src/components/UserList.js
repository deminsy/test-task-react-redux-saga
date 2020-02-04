import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserItemList } from "./UserItemList";
import { showUpdateUserModal } from "../actions/user-list";
export const UserList = () => {
  const { data } = useSelector(state => state.userList);
  const dispatch = useDispatch();

  const handleUpdateUser = user => {
    dispatch(showUpdateUserModal(user));
  };
  return (
    <div>
      {data.map(user => {
        return (
          <UserItemList
            key={user.id}
            userInfo={user}
            handleUpdateUser={() => handleUpdateUser(user)}
          />
        );
      })}
    </div>
  );
};
