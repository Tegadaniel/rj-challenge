import { data } from "../../services/data";
import {ADD_ROOM} from "../action/actionTypes";
import { combineReducers } from "redux";



function reducer (state = data, action){
    switch(action.type){
        case ADD_ROOM:
            const state1 = state.find(b => action.id === b.id);
            const state2 = state.filter(b => action.id !== b.id);
            return[
               
                {
                    ...state1,
                    room: state1.room + 1
                },
                ...state2
            ];
        default:
            return state;
    }
}

const reducers = combineReducers({
    reducer
});

export default reducers;