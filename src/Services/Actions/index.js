export const loggedUser = (data) => {
  return {
    type: "LOGGED_USER_DATA",
    payload: data,
  };
};

export const studentAnswers = (data) => {
  return {
    type: "STUDENT_ANSWERS",
    payload: data,
  };
};

export const studentScore = () => {
  return {
    type: "STUDENT_SCORE",
  };
};

export const resetStudentScore = () => {
  return {
    type: "RESET_STUDENT_SCORE",
  };
};
