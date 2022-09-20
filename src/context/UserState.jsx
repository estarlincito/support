import { useReducer } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import data_json from "../components/data.json";

//UserState initialState
const UserState = (props) => {
  const initialState = {
    data_card: {},
    selected_card: null,
    selected_contact: null,
    footer_value: false,
    curren_url_value: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const get_data_json = () => {
    dispatch({
      type: "GET_DATA_JON",
      payload: data_json,
    });
  };

  const get_card = (parr) => {
    const value = parr === null ? null : data_json.card[parr-1];
    dispatch({
      type: "GET_CARD",
      payload: value,
    });
  };

  const get_contact = (parr) => {
    const value = parr === null ? null : data_json.card[parr-1];
    dispatch({
      type: "GET_CONTACT",
      payload: value,
    });
  };

  const set_footer = (value) => {
    dispatch({
      type: "ACTIVE",
      payload: value,
    });
  };

  const curren_url = (value) => {
    dispatch({
      type: "CURREN_URL",
      payload: value,
    });
  };

  return (
    <UserContext.Provider
      value={{
        //objects
        data_card: state.data_card,
        selected_card: state.selected_card,
        selected_contact: state.selected_contact,
        curren_url_value: state.curren_url_value,
        footer_value: state.footer_value,

        //functions
        get_data_json: get_data_json,
        get_card: get_card,
        get_contact: get_contact,
        set_footer: set_footer,
        curren_url: curren_url,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
