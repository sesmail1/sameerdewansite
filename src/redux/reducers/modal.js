import { 
    MODAL_DISPLAY,
    MODAL_DATA
 } from '../actions/modal';

export function modal_reducer(state = {modal: false}, action) {
    switch(action.type) {
        case MODAL_DISPLAY:
            return {
                ...state,
                modal: action.display
            };
        case MODAL_DATA:
            return {
                ...state,
                currentPortfolioItem: action.currentPortfolioItem
            };
        default:
            return state;
    }
};