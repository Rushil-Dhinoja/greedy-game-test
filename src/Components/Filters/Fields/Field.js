import React from "react";
import { useDispatch } from "react-redux";
import { setVisibleFields } from "../../../Store/Actions/TableData";
import Styles from "./Fields.module.scss";
const Field = (props) => {
  const { children, className, isActive } = props;
  const dispatch = useDispatch();

  const setFields = (field) => {
    dispatch(setVisibleFields(field));
  };

  return (
    <div
      onClick={() => setFields(children)}
      className={`${Styles.field} ${className} ${
        isActive ? Styles.active : ""
      } `}
    >
      {children}
    </div>
  );
};

export default Field;
