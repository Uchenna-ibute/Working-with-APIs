import { incrementLikes } from './like.js';

export const display = (meal, likes, index) => {
  const list = document.querySelector('.wrap');
  const html = `
  <div id="meals>
  <div class="item">
    <img src="${meal.strMealThumb}" alt="food">
  </div>
  <div class="name">
    <h3>${meal.strMeal} <i class="fa-solid fa-heart" id="heart" data-id = "${index}"></i></h3>
    <p class="total"> <span class='like'>${likes}</span> likes</p>
    <a href="#" class="comment" data-id = "${index}">Comment</a>
  </div>
  </div>`;
  const item = document.createElement('li');
  item.setAttribute('data-id', meal.id);
  item.classList.add('list');
  item.innerHTML = html;
  list.appendChild(item);
};

export const addLike = (like, index) => {
  like.forEach((item, i) => {
    item.addEventListener('click', () => {
      if (i === index) {
        incrementLikes(index);
        const contain = item.parentElement.parentElement;
        const itemlike = contain.querySelector('.like');
        const currentCount = parseInt(itemlike.innerText, 10);
        itemlike.innerText = currentCount + 1;
      }
    });
  });
};
