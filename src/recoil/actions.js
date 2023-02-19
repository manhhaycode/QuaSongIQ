export const setStart = (state) => {
    return {
        type: 'SET_START',
        payload: state,
    };
};

export const setLoading = (state) => {
    return {
        type: 'SET_LOADING',
        payload: state,
    };
};

export const setPlaying = (state) => {
    return {
        type: 'SET_PLAYING',
        payload: state,
    };
};
