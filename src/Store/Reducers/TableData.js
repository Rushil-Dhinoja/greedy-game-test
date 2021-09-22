import { SET_TABLE_DATA } from "../Actions/Constants";

const initialState = {
  tableData: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TABLE_DATA:
      return { ...state, tableData: payload };
    default:
      return state;
  }
}
