import {
  SET_DATE_FILTER,
  SET_TABLE_DATA,
  SET_VISIBLE_FIELDS,
} from "../Actions/Constants";

const initialState = {
  tableData: [],
  metrics: {},
  filters: {
    date: [],
  },
  visibleFields: {
    Clicks: true,
    "Ad Requests": true,
    "Ad Response": true,
    Impression: true,
    Revenue: true,
    "Fill Rate": true,
    CTR: true,
  },
};

export default function tableDataReucer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TABLE_DATA:
      return {
        ...state,
        tableData: payload.combinedAppData,
        metrics: payload.metrics,
      };
    case SET_DATE_FILTER:
      return { ...state, filters: { ...state.filters, date: payload } };
    case SET_VISIBLE_FIELDS:
      return {
        ...state,
        visibleFields: {
          ...state.visibleFields,
          [payload]: !state.visibleFields[payload],
        },
      };
    default:
      return state;
  }
}
