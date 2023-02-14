const homePageCount = () => {
  const list = document.querySelector('.wrap');
  const count = list.childElementCount;
  return count;
};

export default homePageCount;