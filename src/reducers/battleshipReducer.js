export const battleshippReducer = (state = "",action) => {
    switch(action.type){
        case "@battlesip/initialization":
            state = action.stateGame;
            return state;
        case "@battlesip/surrender":
            state = action.stateGame;
            return state;
        case "@battlesip/win":
            state = action.stateGame;
            return state;
        case "@battlesip/lose":
            state = action.stateGame;
            return state; 
        default:
            state = "Not Finished";
            return state;
    }
}
