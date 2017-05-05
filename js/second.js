const createAction = require('redux-actions').createAction;

module.exports = function(action) {
  const increment = createAction(action);
  console.log(increment(42));
}
