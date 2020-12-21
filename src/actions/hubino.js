//import types
import {INPUT_SUCCESS, INPUT_FAIL, OUT_GOING_SUCCESS, OUT_GOING_FAIL} from './types'


//function that handles user message

export const userMessage = (message) => async(dispatch) =>{
    try{
        dispatch({ type: INPUT_SUCCESS, payload:message});
    }catch(err){
        dispatch({type:INPUT_FAIL})
    }
};

export const responseMessage = (message) => async(dispatch) =>{
    try{
        dispatch({ type: OUT_GOING_SUCCESS, payload:message});
    }catch(err){
        dispatch({type:OUT_GOING_FAIL})
    }
};


// creates a session  - API CALL TO back end

// sends message to bot - api call 