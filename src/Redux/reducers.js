;
export  const SWITCH_SIDE_BAR = 'SWITCH_SIDE_BAR';

const initialState = {
    sideBar: false
}

 function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SWITCH_SIDE_BAR:
            return {
                ...state,
                sideBar: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;