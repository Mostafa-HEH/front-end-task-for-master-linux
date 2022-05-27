import { combineReducers } from "redux";

const loggedUserReducer = (data = { name: "" }, action) => {
  switch (action.type) {
    case "LOGGED_USER_DATA":
      return action.payload;

    default:
      return data;
  }
};

const studentScoreReducers = (data = 0, action) => {
  switch (action.type) {
    case "STUDENT_SCORE":
      return data + 1;
    case "RESET_STUDENT_SCORE":
      return 0;

    default:
      return data;
  }
};

export default combineReducers({
  userData: loggedUserReducer,
  studentScore: studentScoreReducers,
});
