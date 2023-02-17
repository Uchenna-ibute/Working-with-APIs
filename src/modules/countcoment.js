const countcoments = (arr) => {
  const comments = arr;
  let count = 0;
  comments.forEach(() => {
    count += 1;
  });
  return count;
};

module.exports = countcoments;