import { USERS } from "../actions/type";

const defaultState = []

const users = (state = defaultState, action) => {
    switch (action.type) {
        case USERS:
            return [...state, ...action.profissa];
        default:
            return state;
    }
};

export default users;
