//import types
import {INPUT_SUCCESS, INPUT_FAIL, OUT_GOING_SUCCESS, OUT_GOING_FAIL} from '../actions/types';

//Initial State

const initialState = {
    messages : [{'messageId':1, 'message': 'hi', 'type': 'incoming'}],
    botResponses : [
        {'message': 'Good Morning', 'type' : 'out_going' },
        {'message': 'What you want to Order Today', 'type' : 'out_going' },
        {'message': 'Great! I will place the order now! Thank you', 'type' : 'out_going' },
        {'message': 'Hello'}
    ]
};
// switch statement - update state


//bot response



export default (state=initialState,action) => {
    const {type, payload} = action;
    let {messages} = state;
    
    switch(type){
        case INPUT_SUCCESS :
            messages = [...messages, {'messageId': payload.messageId, message:payload.message, type:payload.type}]
            return {
                ...state,
                messages
            }
        case INPUT_FAIL :
            return{
                ...state
            }
        case OUT_GOING_SUCCESS :
            return {
                ...state
            }
        case OUT_GOING_FAIL :
            return {
                ...state
            }
        default :
            return {
                ...state
            }
    }
};