export const increment = (numberToIncrement) => {
  return {
    type: 'INCREMENT',
    payload: numberToIncrement,
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};
