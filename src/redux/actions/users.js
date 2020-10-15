import { USERS } from "./type";
import axios from "axios";

const users = (profissa) => ({
    type: USERS,
    profissa,
});

export const requestUsers = () => (dispatch) => {
    axios.get("https://profissa-server.herokuapp.com/users").then((res) => {
        dispatch(users(res.data));
    });
};
