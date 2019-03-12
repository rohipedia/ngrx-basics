import * as basicsAction from './basics.action';

const initialState = {
    count: 0,
    hobbies: [
        { name: '' }
    ]
}

export function basicReducer(state = initialState, action: basicsAction.basicsAction) {
    switch (action.type) {
        case basicsAction.UPDATE:
            return {
                ...state,
                count: action.payload
            }
        case basicsAction.ADD_HOBBY: 
            return {
                ...state,
                hobbies: [...state.hobbies, action.payload]
            }
    }
    return state;
}