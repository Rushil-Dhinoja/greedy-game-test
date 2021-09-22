import React from "react";
import DatePicker from "./DatePicker";
import Styles from "./Filters.module.scss";
import Settings from "./Settings";
const Filters = () => {
  return (
    <div className={`${Styles.filtersContainer}`}>
      <DatePicker />
      <Settings />
    </div>
  );
};

export default Filters;
