const GET_CARD = "GET_CARD";
const GET_DATA_JON = "GET_DATA_JON";
const GET_CONTACT = "GET_CONTACT";
const CLOSE_SHERE = "CLOSE_SHERE";

export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_DATA_JON:
      return {
        ...state,
        data_card: payload,
      };

    case GET_CARD:
      return {
        ...state,
        selected_card: payload,
      };

    case CLOSE_SHERE:
      return {
        ...state,
        selected_card: payload,
      };

    case GET_CONTACT:
      return {
        ...state,
        selected_contact: payload,
      };

    default:
      return state;
  }
};
