import { SET_DATE_FILTER, SET_TABLE_DATA } from "../Actions/Constants";

const initialState = {
  tableData: [],
  filters: {
    date: [],
  },
};

export default function tableDataReucer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TABLE_DATA:
      return { ...state, tableData: payload };
    case SET_DATE_FILTER:
      return { ...state, filters: { ...state.filters, date: payload } };
    default:
      return state;
  }
}
