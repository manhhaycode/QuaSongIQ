import { atom, selector } from 'recoil';

const defaultData = {
    tiger: {
        river: 1,
        onBoat: {
            status: false,
            pos: 0,
        },
    },
    sheep: {
        river: 1,
        onBoat: {
            status: false,
            pos: 0,
        },
    },
    carot: {
        river: 1,
        onBoat: {
            status: false,
            pos: 0,
        },
    },
    farmer: {
        river: 1,
        onBoat: {
            status: false,
            pos: 0,
        },
    },
    seatEmpty: {
        first: true,
        second: true,
    },
    raft: {
        ref: null,
        pos: 1,
    },
};

const defaultDataGameLayout = {
    start: true,
    playing: false,
};

export const gameLayout = atom({
    key: 'layoutGame',
    default: defaultDataGameLayout,
});

export const gameState = atom({
    key: 'stateGame',
    default: defaultData,
});

export const handleGameLayout = selector({
    key: 'handleGameLayout',
    get: ({ get }) => {
        const states = get(gameLayout);
        return states;
    },
    set: ({ get, set }, action) => {
        const states = get(gameLayout);
        switch (action.type) {
            case 'SET_START':
                set(gameLayout, {
                    ...states,
                    start: action.payload,
                });
                break;
            case 'SET_PLAYING':
                set(gameLayout, {
                    ...states,
                    playing: action.payload,
                });
                break;
            default:
                break;
        }
    },
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
            case 'SET_TIGER_ONBOAT':
                set(gameState, {
                    ...states,
                    tiger: {
                        river: states.tiger.river,
                        onBoat: action.payload,
                    },
                });
                break;
            case 'SET_TIGER_RIVER':
                set(gameState, {
                    ...states,
                    tiger: {
                        onBoat: states.tiger.onBoat,
                        river: action.payload,
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
            case 'SET_FARMER_RIVER':
                set(gameState, {
                    ...states,
                    farmer: {
                        onBoat: states.farmer.onBoat,
                        river: action.payload,
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
            case 'SET_SHEEP_RIVER':
                set(gameState, {
                    ...states,
                    sheep: {
                        onBoat: states.sheep.onBoat,
                        river: action.payload,
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
            case 'SET_CAROT_RIVER':
                set(gameState, {
                    ...states,
                    carot: {
                        onBoat: states.carot.onBoat,
                        river: action.payload,
                    },
                });
                break;
            case 'SET_SEAT_EMPTY':
                set(gameState, {
                    ...states,
                    seatEmpty: action.payload,
                });
                break;
            case 'SET_RAFT':
                set(gameState, {
                    ...states,
                    raft: action.payload,
                });
                break;
            default:
                break;
        }
    },
});
