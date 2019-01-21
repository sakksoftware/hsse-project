import { 
    AUTH_USER,
    AUTH_ERROR,
    CONFIRM_USER_EMAIL,
    FORGOT_PASSWORD_EMAIL,
    CURRENT_USER,
    CURRENT_USER_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    authenticated: '',
    errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {

        case AUTH_USER:
            return { ...state, authenticated: action.payload };
        case AUTH_ERROR:
            return { ...state, errorMessage: action.payload };
        case CONFIRM_USER_EMAIL: 
            return { ...state, confirmMessage: action.payload };
        case CURRENT_USER: 
            return { ...state, currentUser: action.payload };
        case CURRENT_USER_ERROR: 
            return { ...state, currentUserErrorMessage: action.payload };
        case FORGOT_PASSWORD_EMAIL: 
            return { ...state, forgotPasswordMessage: action.payload };
        default:
            return state;
            
    }

}