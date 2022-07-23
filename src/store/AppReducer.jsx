import AppConstants from '@/constants/AppConstants';

const AppReducer = (state, action) => {
    switch (action.type) {
        case AppConstants.AUTH_SET_USER:
            return {
                ...state, 
                auth_status: action.payload
            };
        default:
            return state;
    }
};

export default AppReducer;