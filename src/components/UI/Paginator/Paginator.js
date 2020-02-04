import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userListPageRequested } from "../../../actions/user-list";
import "./Paginator.css";

export const Paginator = () => {
  const { total_pages, page, data } = useSelector(state => state.userList);
  const dispatch = useDispatch();
  console.log(total_pages);
  const setPage = page => {
    dispatch(userListPageRequested(page));
  };
  const setNextPage = () => {
    if (page < total_pages) {
      console.log(page + 1);
      setPage(page + 1);
    }
  };
  const setPrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return (
    <div className="pagination">
      <div onClick={setPrevPage}>&laquo;</div>
      <div>
        {page}/{total_pages}
      </div>

      <div onClick={setNextPage}>&raquo;</div>
    </div>
  );
};
