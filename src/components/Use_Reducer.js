

const Use_Reducer = (state, action) => {
    switch(action.type) {
        case "hide":
            // state = "Share__container";
            return state+1

            case "Share__container":
                state = "hide";
                return alert(state)

        default:
            return state;
    }
}

export default Use_Reducer;