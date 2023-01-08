import {createReducer} from "@reduxjs/toolkit";
// import boardDefault from "../Wordal/words";

const initialstate = {
      board:[
        ["A", "B", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", "b"],
      ],
};

export const customReducer = createReducer(initialstate, {
    // // This is the action that will be called when the action is dispatched

    newLetter: (state, action) =>{
        state = {
            ...state,
            board: action.payload
        }
    }

   
}); 
