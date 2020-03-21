//SET_COMICS
export const setComics = (comics) => ({
  type:'SET_COMICS',
  comics
});

export const startSetComics = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/comics",{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.comics) {
        dispatch(setComics(data.comics))
      }
    })
  }
}
