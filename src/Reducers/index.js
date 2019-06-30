import { CHANGE_NUMBER_OF_SLIDES, LOG_IN, LOG_OUT, TOGGLE_HISTORY } from '../Actions';
import { combineReducers } from 'redux';

let initialState = {
    numberOfSlides: 1,
    selectedSlides: [1],
    isLoggedIn: false,
    showHistory: false
}

let carousel = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_NUMBER_OF_SLIDES:
            console.log(state);
            return {
                ...state,
                numberOfSlides: +action.numberOfSlides,
                selectedSlides: [
                    ...state.selectedSlides, 
                    +action.numberOfSlides
                ]
            }
        case LOG_IN:
            return {
                ...state,
                isLoggedIn: true
            }
        case LOG_OUT:
            return {
                ...state,
                isLoggedIn: false
            }
        case TOGGLE_HISTORY: 
            return {
                ...state,
                showHistory: !state.showHistory
            }
        default: 
            return state;
    }

}

const rootReducer = combineReducers({
    carousel
})

export default rootReducer;