//SET PUBLISHERS
export const setPublishers = (publishers) => ({
  type: 'SET_PUBLISHERS',
  publishers
});

export const startSetPublishers = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/publishers",{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
         Accept: 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.publishers) {
        dispatch(setPublishers(data.publishers))
      }
    })
  };
};
///////////////////////////////////////////////////////////////////////////////////
