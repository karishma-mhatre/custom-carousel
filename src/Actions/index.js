export const CHANGE_NUMBER_OF_SLIDES = "CHANGE_NUMBER_OF_SLIDES";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const TOGGLE_HISTORY = "TOGGLE_HISTORY"

export const changeNumberOfSlides = (numberOfSlides) => ({
    type: CHANGE_NUMBER_OF_SLIDES,
    numberOfSlides
});

export const logIn = () => ({
    type: LOG_IN,
});

export const logOut = () => ({
    type: LOG_OUT,
});

export const toggleHistory = () => ({
    type: TOGGLE_HISTORY,
});
