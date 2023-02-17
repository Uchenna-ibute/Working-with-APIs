import './style.css';
import { meals } from './modules/api.js';
import { likeItem, incrementLikes } from './modules/like.js';
import { display } from './modules/home.js';
import { displaycommentPopup } from './modules/popupcoment.js';

meals().then(async (data) => {
  const meal = [...data.meals];
  const size = meal.length;
  const total = document.querySelector('.total');
  const likedItem = await likeItem();
  total.innerText = size;
  meal.forEach((value, index) => {
    let liked = 0;
    likedItem.forEach((dat) => {
      if (index === dat.item_id) {
        liked = dat.likes;
      }
    });
    display(value, liked, index);
    // popup start here
    displaycommentPopup(value, liked, index);
    // popup ends here
  });
  const heart = document.querySelectorAll('#heart');
  heart.forEach((a) => {
    a.addEventListener('click', async () => {
      const { id } = a.dataset;
      await incrementLikes(parseInt(id, 10));
      const contain = a.parentElement.parentElement;
      const itemlike = contain.querySelector('.like');
      const currentCount = parseInt(itemlike.innerText, 10);
      itemlike.innerText = currentCount + 1;
    });
  });
});
