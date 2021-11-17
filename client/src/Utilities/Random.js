const random = (length) => {
  return Math.floor(Math.random() * length);
};

export const randomize = (array) => {
  return array[random(array.length)];
};
