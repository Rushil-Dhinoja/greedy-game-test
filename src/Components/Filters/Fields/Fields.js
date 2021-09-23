import React from "react";
import Field from "./Field";
import Styles from "./Fields.module.scss";
import { useSelector } from "react-redux";
const Fields = (props) => {
  const { isVisible } = props;
  const visibleFields = useSelector((state) => state.tableData.visibleFields);
  const fields = [
    "Clicks",
    "Ad Requests",
    "Ad Response",
    "Impression",
    "Revenue",
    "Fill Rate",
    "CTR",
  ];

  return (
    isVisible && (
      <div className={Styles.fieldsContainer}>
        <p>Dimensions and Metrics</p>
        <div className={Styles.fields}>
          <Field className={Styles.active}>Date</Field>
          <Field className={Styles.active}>App</Field>
          {fields.map((field) => (
            <Field isActive={visibleFields[field]}>{field}</Field>
          ))}
        </div>
      </div>
    )
  );
};

export default Fields;
