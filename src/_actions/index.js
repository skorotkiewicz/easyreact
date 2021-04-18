import axios from "axios";

export const setCounter = (msg) => {
  return {
    type: "SET_COUNTER",
    payload: msg,
  };
};
//
export const increment = (msg) => {
  return {
    type: "INCREMENT",
    payload: msg,
  };
};
//
export const decrement = (msg) => {
  return {
    type: "DECREMENT",
    payload: msg,
  };
};

//

export const fetchUsers = (howMany) => async (dispatch, getState) => {
  dispatch({ type: "FETCH_USERS_REQUEST" });
  const moreVariables = "123" + howMany;

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (users) {
      dispatch({
        type: "FETCH_USERS_SUCCESS",
        payload: users.data,
        more: moreVariables, // <-- you can dispatch more variables to reducer, cool!
      });
    })
    .catch(function (error) {
      dispatch({ type: "FETCH_USERS_FAILURE", error });
    });
};
