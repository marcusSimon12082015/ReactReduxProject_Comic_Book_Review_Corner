const reviewsReducerInitialState = [];

export default(state=reviewsReducerInitialState, action) => {
  switch (action.type) {
    case 'SET_REVIEWS':
      return action.reviews;
    default:
      return state;
  }
}
