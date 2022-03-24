import { BOARD_ADD, DATA_ERROR, GET_DATA } from "./../actions/types";
const initialState = {
  data: {},
  loading: true,
};

export default function auth(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case DATA_ERROR:
      return {
        ...state,
        data: {},
        loading: false,
      };
    case BOARD_ADD:
      return {
        ...state,
      };

    default:
      return state;
  }
}
