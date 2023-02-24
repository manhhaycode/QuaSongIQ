import { atom, selector } from 'recoil';

const defaultData = {
    start: true,
    playing: false,
    tiger: {
        river: false,
        onBoat: {
            status: false,
            pos: 0,
        },
    },
    sheep: {
        river: false,
        onBoat: {
            status: false,
            pos: 0,
        },
    },
    carot: {
        river: false,
        onBoat: {
            status: false,
            pos: 0,
        },
    },
    farmer: {
        river: false,
        onBoat: {
            status: false,
            pos: 0,
        },
    },
    seatEmpty: {
        first: true,
        second: true,
    },
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
            case 'SET_PLAYING':
                set(gameState, {
                    ...states,
                    playing: action.payload,
                });
                break;

            case 'SET_TIGER_ONBOAT':
                set(gameState, {
                    ...states,
                    tiger: {
                        river: states.tiger.river,
                        onBoat: action.payload,
                    },
                });
                break;
            case 'SET_FARMER_ONBOAT':
                set(gameState, {
                    ...states,
                    farmer: {
                        river: states.farmer.river,
                        onBoat: action.payload,
                    },
                });
                break;
            case 'SET_SHEEP_ONBOAT':
                set(gameState, {
                    ...states,
                    sheep: {
                        river: states.sheep.river,
                        onBoat: action.payload,
                    },
                });
                break;
            case 'SET_CAROT_ONBOAT':
                set(gameState, {
                    ...states,
                    carot: {
                        river: states.carot.river,
                        onBoat: action.payload,
                    },
                });
                break;
            case 'SET_SEAT_EMPTY':
                set(gameState, {
                    ...states,
                    seatEmpty: action.payload,
                });
                break;
            default:
                break;
        }
    },
});
