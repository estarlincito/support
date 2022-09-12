import { useReducer } from "react";

//UserState  import
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
//UserState import//
import data_json from "../components/data.json";

//UserState initialState
const UserState = (props) => {
  const initialState = {
    data_card: [],
    selected_card: null,
    selected_contact: null
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
      payload: data_json[id - 1],
    });
  };

  const get_contact = (id) => {
    //UserState change
    dispatch({
      type: "GET_CONTACT",
      payload: data_json[id - 1],
    });
  };

  const close_share = () => {
    //UserState change
    dispatch({
      type: "CLOSE_SHERE",
      payload: null,
    });
  };

  return (
    <UserContext.Provider
      value={{
        data_card: state.data_card,
        selected_card: state.selected_card,
        selected_contact: state.selected_contact,
        getDataJson: getDataJson,
        get_card: get_card,
        get_contact: get_contact,
        close_share: close_share
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
