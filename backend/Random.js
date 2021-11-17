const random = (length) => {
  return Math.floor(Math.random() * length);
};

module.exports.randomize = (array) => {
  return array[random(array.length)];
};
