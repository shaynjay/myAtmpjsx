// reducer for state.slice01
// using setIn() from immutable.js
function slice01(slice01 = {}, action) {
  switch (action.type) {
    case DO_SOMETHING:
      return slice01.setIn(['somewhere', action.payload.id],
                           action.payload.something)
    default:
      return slice01
  }
} 
store.subscribe(listener)
