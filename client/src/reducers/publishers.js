const publishersReducerInitialState = [];

export default(state=publishersReducerInitialState, action) => {
  switch (action.type) {
    case 'SET_PUBLISHERS':
      return action.publishers;
    default:
      return state;
  }
}
