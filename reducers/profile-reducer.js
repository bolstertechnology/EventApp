const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case 'IS_LOADING':
            return { ...state, isLoading: action.data };
        default:
            return state;
    }
};
export default profileReducer;