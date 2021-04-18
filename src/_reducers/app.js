import { nanoid } from "nanoid";

// state = 10, default state
export const counter = (state = 10, action) => {
  switch (action.type) {
    case "SET_COUNTER":
      return action.payload;

    case "INCREMENT":
      // or: return state + 1
      return state + action.payload;

    case "DECREMENT":
      // or: return state - 1
      return state - action.payload;

    default:
      return state;
  }
};

//

export const users = (
  state = { active: [], isLoading: false, error: null },
  action
) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        active: action.payload,
        howMany: action.more, // our more variable read by action.more and send to howMany, you can read from selector: state.howMany in component
      };
    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

//

// Add todoText with own ID and remove by ID

export const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat({ todo: action.payload, id: nanoid(), done: false });

    case "DELETE_TODO":
      return state.filter((t) => t.id !== action.payload);

    case "STATUS_TODO":
      let todo = state.find((t) => {
        return t.id === action.payload;
      });
      todo.done = !todo.done;
      return [...state];

    default:
      return state;
  }
};

// Add only todoText and remove by todoText

// export const todos = (state = [], action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return state.concat(action.payload);

//     case "DELETE_TODO":
//       return state.filter((todo) => todo !== action.payload);

//     default:
//       return state;
//   }
// };
