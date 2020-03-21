//SET REVIEWS
export const setReviews = (reviews) => ({
  type: 'SET_REVIEWS',
  reviews
});

export const startSetReviews = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/reviews",{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
         Accept: 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.reviews) {
        dispatch(setReviews(data.reviews))
      }
    })
  };
};
