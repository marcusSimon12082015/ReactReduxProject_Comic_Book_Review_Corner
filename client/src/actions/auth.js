//Login part
export const login = (user) => ({
  type: 'LOGIN',
  payload:user
});

export const startLogin = (user) => {
  return dispatch => {
    return fetch("http://localhost:3001/sessions",{
      method:'POST',
      credentials:'include',
      headers:{
        'Content-Type': 'application/json',
         Accept: 'application/json'
      },
      body:JSON.stringify({user})
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.logged_in) {
        dispatch(login(data.user));
      }else{
        dispatch(loginFailed(`Can't Log you in!Check username or password!`));
      }
    })
  };
};

export const loginFailed = (error) => ({
  type:'LOGIN_FAILED',
  payload:error
});

export const checkLoginStatus = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/logged_in",{
      method:'GET',
      credentials:'include',
      headers:{
        'Content-Type': 'application/json',
         Accept: 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.logged_in) {
        dispatch(login(data.user));
      }
    })
  };
}
export const cleanLoginMessages = () => ({
  type:'CLEAN_LOGIN_MESSAGES'
});

//Logout part
export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return dispatch => {
    return fetch("http://localhost:3001/logout",{
      method:'DELETE',
      credentials:'include',
      headers:{
        'Content-Type': 'application/json',
         Accept: 'application/json'
      }
    })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.logged_out) {
        dispatch(logout())
      }
    })
  };
};
//////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//Registration part
export const startRegistration = (user) => {
  return dispatch => {
    return fetch("http://localhost:3001/registrations",{
      method:'POST',
      credentials:'include',
      headers:{
        'Content-Type': 'application/json',
         Accept: 'application/json'
      },
      body:JSON.stringify({user})
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "created") {
        dispatch(registrationSuccess())
        dispatch(login(data.user))
      }else{
        dispatch(registrationFailed(data.error))
      }
    })
  };
};

export const registrationFailed = (error) => ({
  type:'REGISTRATION_FAILED',
  payload:error
});
export const registrationSuccess = () => ({
  type:'REGISTRATION_SUCCESS',
});
export const cleanRegistrationMessages = () => ({
  type:'CLEAN_REGISTRATION_MESSAGES'
});

//Adding comics for user
export const startAddComicToUser = (comicId) => {
  return dispatch => {
    return fetch("http://localhost:3001/user_comics/add_comic_to_user/"+comicId,{
      method:'GET',
      credentials:'include',
      headers:{
        'Content-Type': 'application/json',
         Accept: 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.user) {
        dispatch(addComicSuccess(data))
      }else if(data.warning){
        dispatch(addComicWarning(data))
      }else{
        dispatch(addComicFailed(data))
      }
    })
  };
}

export const addComicFailed = (error) => ({
  type:'ADD_COMIC_FAILED',
  payload:error
});
export const addComicWarning = (warning) => ({
  type:'ADD_COMIC_WARNING',
  payload:warning
});
export const addComicSuccess = (success) => ({
  type:'ADD_COMIC_SUCCESS',
  payload:success
});
export const deleteFlashMessages = () => ({
  type:'DELETE_FLASH_MESSAGES'
})
