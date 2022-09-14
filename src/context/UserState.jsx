import { useReducer } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import data_json from "../components/data.json";

//UserState initialState
const UserState = (props) => {
  const initialState = {
    data_card: [],
    selected_card: null,
    selected_contact: null,
    active_value: false,
    curren_url_value: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getDataJson = () => {
    //UserState change
    dispatch({
      type: "GET_DATA_JON",
      payload: data_json,
    });
  };

  const get_card = (id) => {
    //UserState change
    dispatch({
      type: "GET_CARD",
      payload: data_json[id],
    });
  };

  const off_get_card = (value) => {
    //UserState change
    dispatch({
      type: "GET_CARD",
      payload: value,
    });
  };

  const get_contact = (id) => {
    //UserState change
    dispatch({
      type: "GET_CONTACT",
      payload: data_json[id],
    });
  };

  const off_get_contact = (value) => {
    //UserState change
    dispatch({
      type: "GET_CONTACT",
      payload: value,
    });
  };

  const close_share = () => {
    //UserState change
    dispatch({
      type: "CLOSE_SHERE",
      payload: null,
    });
  };

  const setActive = (value) => {
    //UserState change
    dispatch({
      type: "ACTIVE",
      payload: value,
    });
  };

  const curren_url = (value) => {
    //UserState change
    dispatch({
      type: "CURREN_URL",
      payload: value,
    });
  };

  return (
    <UserContext.Provider
      value={{
        data_card: state.data_card,
        selected_card: state.selected_card,
        selected_contact: state.selected_contact,
        curren_url_value: state.curren_url_value,
        active_value: state.active_value,
        getDataJson: getDataJson,
        get_card: get_card,
        off_get_card: off_get_card,
        get_contact: get_contact,
        close_share: close_share,
        setActive: setActive,
        curren_url: curren_url,
        off_get_contact: off_get_contact
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
