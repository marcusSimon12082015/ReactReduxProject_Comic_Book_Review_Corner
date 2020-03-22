const initialState = {
  user:{},
  messages:{
    error:'',
    warning:'',
    success:'',
    loginError:'',
    registrationError:''
  },
  logged_in:false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        messages:{
          ...state.messages,
          loginError:''
        },
        user: action.payload,
        logged_in:true
      };
    case 'LOGIN_FAILED':
      return{
        ...state,
        messages:{
          ...state.messages,
          loginError:action.payload,
        }
      };
      case 'CLEAN_LOGIN_MESSAGES':
        return{
          ...state,
          messages:{
            ...state.messages,
            loginError:''
          }
        }
      default:
        return state;
    }
  };
