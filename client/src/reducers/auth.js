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
    case 'LOGOUT':
      return initialState;
    case 'CLEAN_LOGIN_MESSAGES':
      return{
        ...state,
        messages:{
          ...state.messages,
          loginError:''
        }
      }
    case 'CLEAN_REGISTRATION_MESSAGES':
      return{
        ...state,
        messages:{
          ...state.messages,
          registrationError:''
        }
      }
    case 'REGISTRATION_FAILED':
      return{
        ...state,
        messages:{
          ...state.messages,
          registrationError:action.payload
        }
      }
    case 'REGISTRATION_SUCCESS':
      return{
        ...state,
        messages:{
          ...state.messages,
          registrationError:''
        }
      }
    case 'ADD_COMIC_SUCCESS':
      return{
        ...state,
        messages:{
          ...state.messages,
          success:action.payload.success
        },
        user:action.payload.user
      }
    case 'ADD_COMIC_WARNING':
      return{
        ...state,
        messages:{
          ...state.messages,
          warning:action.payload.warning
        }
      }
    case 'ADD_COMIC_FAILED':
      return{
        ...state,
        messages:{
          ...state.messages,
          error:action.payload.error
        }
      }
    case 'DELETE_FLASH_MESSAGES':
    return{
      ...state,
      messages:{
        ...state.messages,
        error:'',
        success:'',
        warning:''
      }
    }
    default:
      return state;
  }
};
