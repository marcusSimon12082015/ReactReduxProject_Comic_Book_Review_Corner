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
///////////////////////////////////////////////////////////////////////////////
