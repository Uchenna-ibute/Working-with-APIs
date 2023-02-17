import './style.css';
import { meals } from './modules/api.js';
import { likeItem, incrementLikes } from './modules/like.js';
import { display } from './modules/home.js';
import countReservation from './modules/reservationCounter.js';
import {
  displayReservation, displayReservationPopUp,
  postYourReservation, resetFormAndReservationDiv,
} from './modules/reservation.js';

const list = document.querySelector('.wrap');
const reservationPopup = document.querySelector('.reservation-popup-section');
const overlay = document.querySelector('.overlay');

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

list.addEventListener('click', async (event) => {
  if (event.target.className === 'reservation') {
    const response = await meals();
    const mealInfo = [...response.meals];
    mealInfo.forEach((meal) => {
      if (event.target.id === meal.idMeal) {
        displayReservationPopUp(meal);
        overlay.style.opacity = 1;
        displayReservation(event.target.id);
      }
    });
  }
});

reservationPopup.addEventListener('click', (event) => {
  if (event.target.className === 'pop-up-close-btn') {
    overlay.style.opacity = 0;
    reservationPopup.style.display = 'none';
  }
});

reservationPopup.addEventListener('click', async (event) => {
  if (event.target.className === 'reserve-button') {
    const name = document.getElementById('name').value;
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const reservationId = event.target.id;
    if (name && start && end) {
      await postYourReservation(reservationId, name, start, end);
      resetFormAndReservationDiv(event);
      await displayReservation(reservationId);
      const count = await countReservation(event.target.id);
      const reservationNumber = document.getElementById('reserved-number');
      reservationNumber.innerHTML = `Reservations (${count})`;
    }
  }
});
