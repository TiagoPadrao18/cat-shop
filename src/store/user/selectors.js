import { get } from "lodash";

export const getUsername = (state) => get(state, "user.username");
