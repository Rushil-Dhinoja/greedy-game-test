import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateRangePicker } from "rsuite";
import { setDateFilter } from "../../../Store/Actions/TableData";
const DatePicker = () => {
  const dispatch = useDispatch();
  const dates = useSelector((state) => state.tableData.filters.date);

  const onDateChange = (dates) => {
    dispatch(setDateFilter(dates));
  };

  return (
    <div>
      <DateRangePicker size="lg" onChange={onDateChange} value={dates} />
    </div>
  );
};

export default DatePicker;
