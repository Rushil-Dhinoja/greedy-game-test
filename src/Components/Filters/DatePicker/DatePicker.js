import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateRangePicker } from "rsuite";
import { getTableData, setDateFilter } from "../../../Store/Actions/TableData";
const DatePicker = () => {
  const dispatch = useDispatch();
  const dates = useSelector((state) => state.tableData.filters.date);

  const onDateChange = (dates) => {
    dispatch(setDateFilter(dates));
    if (!dates[0] && !dates[1]) {
      return;
    }
    const startYear = dates[0].getFullYear();
    const startMonth = dates[0].getMonth() + 1;
    const startDate = dates[0].getDate();
    const endYear = dates[1].getFullYear();
    const endMonth = dates[1].getMonth() + 1;
    const endDate = dates[1].getDate();
    const url = `http://go-dev.greedygame.com/v3/dummy/report?startDate=${startYear}-${
      startMonth < 10 ? "0" + startMonth : startMonth
    }-${startDate < 10 ? "0" + startDate : startDate}&endDate=${endYear}-${
      endMonth < 10 ? "0" + endMonth : endMonth
    }-${endDate < 10 ? "0" + endDate : endDate}`;

    dispatch(getTableData(url));
  };

  return (
    <div>
      <DateRangePicker size="lg" onChange={onDateChange} value={dates} />
    </div>
  );
};

export default DatePicker;
