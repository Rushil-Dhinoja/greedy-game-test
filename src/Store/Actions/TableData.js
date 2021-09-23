import axios from "axios";
import {
  SET_DATE_FILTER,
  SET_TABLE_DATA,
  SET_VISIBLE_FIELDS,
} from "./Constants";

const abbreviatedNumber = (number) => {
  const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

  const tier = (Math.log10(Math.abs(number)) / 3) | 0;

  if (tier === 0) return number;
  const suffix = SI_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);

  const scaled = number / scale;

  return scaled.toFixed(1) + suffix;
};

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
    fillRate: `${((row.requests / row.responses) * 100).toFixed(2)}%`,
    ctr: `${((row.clicks / row.impressions) * 100).toFixed(2)}%`,
  }));
};

const getMetrics = (tableData, apps) => {
  let metadata = {
    records: tableData.length,
    appRecords: apps.length,
    adRequests: 0,
    adResponses: 0,
    impressions: 0,
    clicks: 0,
    revenue: 0,
  };
  tableData.forEach((row) => {
    metadata.adRequests += row.requests;
    metadata.adResponses += row.responses;
    metadata.impressions += row.impressions;
    metadata.clicks += row.clicks;
    metadata.revenue += row.revenue;
  });
  metadata.fillRate = (
    (metadata.adRequests / metadata.adResponses) *
    100
  ).toFixed(2);
  metadata.ctr = ((metadata.clicks / metadata.impressions) * 100).toFixed(2);
  metadata.adRequests = abbreviatedNumber(metadata.adRequests);
  metadata.adResponses = abbreviatedNumber(metadata.adResponses);
  metadata.impressions = abbreviatedNumber(metadata.impressions);
  metadata.clicks = abbreviatedNumber(metadata.clicks);
  return metadata;
};

export const getTableData = (dataUrl) => async (dispatch) => {
  try {
    const tableData = await axios.get(dataUrl);

    const appData = await axios.get(
      "http://go-dev.greedygame.com/v3/dummy/apps"
    );
    const apps = getNormalizedAppData(appData.data.data);
    const combinedAppData = getCombinedAppData(apps, tableData.data.data);
    const metrics = getMetrics(combinedAppData, appData.data.data);
    dispatch({
      type: SET_TABLE_DATA,
      payload: { combinedAppData, metrics },
    });
  } catch (error) {
    console.log(error);
  }
};

export const setVisibleFields = (field) => (dispatch) => {
  dispatch({
    type: SET_VISIBLE_FIELDS,
    payload: field,
  });
};

export const setDateFilter = (dates) => (disptach) => {
  disptach({
    type: SET_DATE_FILTER,
    payload: dates,
  });
};
