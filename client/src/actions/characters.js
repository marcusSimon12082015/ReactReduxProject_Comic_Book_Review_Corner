//SET CHARACTERS
export const setCharacters = (characters) => ({
  type: 'SET_CHARACTERS',
  characters
});

export const startSetCharacters = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/characters",{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
         Accept: 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.characters) {
        dispatch(setCharacters(data.characters))
      }
    })
  };
};
///////////////////////////////////////////////////////////////////////////////////
