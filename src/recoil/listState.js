import { atom, selector } from 'recoil';

const defaultData = {
    start: true,
    loading: false,
    playing: false,
    stepPlaying: [],
};

export const gameState = atom({
    key: 'stateGame',
    default: defaultData,
});

export const handleGameState = selector({
    key: 'handleGameState',
    get: ({ get }) => {
        const states = get(gameState);
        return states;
    },
    set: ({ get, set }, action) => {
        const states = get(gameState);
        switch (action.type) {
            case 'SET_START':
                set(gameState, {
                    ...states,
                    start: action.payload,
                });
                break;
            case 'SET_LOADING':
                set(gameState, {
                    ...states,
                    loading: action.payload,
                });
                break;
            case 'SET_PLAYING':
                set(gameState, {
                    ...states,
                    playing: action.payload,
                });
                break;
            default:
                break;
        }
    },
});
