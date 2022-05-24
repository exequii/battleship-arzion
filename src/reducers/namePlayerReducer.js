export const namePlayerReducer = (state = "",action) => {
    switch(action.type){
        case "@player/saveNamePlayer":
            state = action.name;
            return state;
        default:
            state = "Player 1";
            return state;
    }
}