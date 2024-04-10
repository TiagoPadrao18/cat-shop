export const LOGIN_USER_ACTION = "LOGIN_USER_ACTION";

export const loginUserAction = (username) => ({
type: LOGIN_USER_ACTION,
payload: username,
});