export const MODAL_DISPLAY = 'MODAL_DISPLAY';

export const modalHandler = (bool) => ({
    type: MODAL_DISPLAY,
    display: bool
});
//////////////////////////////////////////////
export const MODAL_DATA = 'MODAL_DATA';

export const modalContentFill = (data) => ({
    type: MODAL_DATA,
    currentPortfolioItem: data
});
