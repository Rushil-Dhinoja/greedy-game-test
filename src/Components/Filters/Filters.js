import React, { useState } from "react";
import DatePicker from "./DatePicker";
import Fields from "./Fields";
import Styles from "./Filters.module.scss";
import Settings from "./Settings";
const Filters = () => {
  const [isFieldsVisible, setIsFieldsVisible] = useState(true);

  return (
    <>
      <div className={`${Styles.filtersContainer}`}>
        <DatePicker />
        <Settings
          setIsFieldsVisible={setIsFieldsVisible}
          isFieldsVisible={isFieldsVisible}
        />
      </div>
      <Fields isVisible={isFieldsVisible} />
    </>
  );
};

export default Filters;
