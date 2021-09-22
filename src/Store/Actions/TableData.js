import axios from "axios";
import { SET_DATE_FILTER, SET_TABLE_DATA } from "./Constants";

const getNormalizedAppData = (appsData) => {
  const apps = {};
  appsData.forEach((app) => {
    apps[app.app_id] = app.app_name;
  });
  return apps;
};

const getCombinedAppData = (apps, tableData) => {
  return tableData.map((row) => ({
    ...row,
    appName: apps[row.app_id],
    fillRate: `${Math.round((row.requests / row.responses) * 100).toFixed(2)}%`,
    ctr: `${Math.round((row.clicks / row.impressions) * 100).toFixed(2)}%`,
  }));
};

export const getTableData = () => async (dispatch) => {
  try {
    const tableData = await axios.get(
      "http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03"
    );

    const appData = await axios.get(
      "http://go-dev.greedygame.com/v3/dummy/apps"
    );
    const apps = getNormalizedAppData(appData.data.data);
    const combinedAppData = getCombinedAppData(apps, tableData.data.data);

    dispatch({
      type: SET_TABLE_DATA,
      payload: combinedAppData,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setDateFilter = (dates) => (disptach) => {
  disptach({
    type: SET_DATE_FILTER,
    payload: dates,
  });
};
