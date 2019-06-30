import { CHANGE_NUMBER_OF_SLIDES, LOG_IN } from '../Actions';
import { combineReducers } from 'redux';

let initialState = {
    numberOfSlides: 1,
    selectedSlides: [1],
    isLoggedIn: false
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
        case LOG_IN:
            return {
                ...state,
                isLoggedIn: false
            }
        default: 
            return state;
    }

}

const rootReducer = combineReducers({
    carousel
})

export default rootReducer;