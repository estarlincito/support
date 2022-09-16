const GET_CARD = "GET_CARD";
const GET_DATA_JON = "GET_DATA_JON";
const GET_CONTACT = "GET_CONTACT";
const ACTIVE = "ACTIVE";
const CURREN_URL = "CURREN_URL";

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

    case GET_CONTACT:
      return {
        ...state,
        selected_contact: payload,
      };

    case ACTIVE:
      return {
        ...state,
        footer_value: payload,
      };

    case CURREN_URL:
      return {
        ...state,
        curren_url_value: payload,
      };

    default:
      return state;
  }
};
