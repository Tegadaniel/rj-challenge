import { ADD_ROOM } from "./actionTypes"

export const incrementRoom = (id) => {
    return {
        type: ADD_ROOM,
        id
    }
}