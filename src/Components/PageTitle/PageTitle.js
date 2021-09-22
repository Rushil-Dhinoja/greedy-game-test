import React from "react";
import Styles from "./PageTitle.module.scss";
const PageTitle = (props) => {
  const { title } = props;
  return <h1 className={`${Styles.title}`}>{title}</h1>;
};

export default PageTitle;
