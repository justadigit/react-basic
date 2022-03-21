const addToCart = (state, item) => {
  let newItem = {
    id: Math.random(),
    name: item.name,
    price: item.price,
  };
  return [...state, newItem];
};
const removeFromCart = (state, item) => {
  let filtered = state.filter((cart) => {
    return cart.id !== item.id;
  });
  return filtered;
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return addToCart(state, action.payload);
    case 'REMOVE_FROM_CART':
      return removeFromCart(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
