const reservationPopup = document.querySelector('.reservation-popup-section');

export const displayReservationPopUp = (mealObject) => {
  reservationPopup.style.display = 'flex';
  reservationPopup.innerHTML = `
  <div class="reservation-popup">
    <div class="reservation-card">
      <div class="image-close-btn">
        <img class="food-image-popup" src='${mealObject.strMealThumb}' alt="meal">
        <p class="pop-up-close-btn">&#10005;</p>
      </div>
    <h2 class="spacing-in-popup h2-size" id='popup-unique-name'>${mealObject.strMeal}</h2>
    <p class="spacing-in-popup p-font-size">Reservations (0)</p>
    <p class="spacing-in-popup p-font-size">Add a Reservation</p>
    <div class='all-reservations' id="all-reservations">
    </div>
    <div>
      <form action="">
        <input type="text" placeholder="Your name" class="input" id="name"><br><br>
        <input placeholder="Start Date" type="text" onfocus="(this.type = 'date')" id="start" class="input"><br><br>
        <input placeholder="End Date" type="text" onfocus="(this.type = 'date')" id="end" class="input"><br><br>
        <input class="reserve-button" id=${mealObject.idMeal} type="button" value="Reserve">
      </form>
    </div>
  </div>`;
};

export const postYourReservation = async (reservationId, username, dateStart, dateEnd) => {
  const getReservationURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KHwd97Kg4JUFks1Mpn4d/reservations';
  await fetch(getReservationURL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: reservationId,
      username,
      date_start: dateStart,
      date_end: dateEnd,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export const displayReservation = async (itemId) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KHwd97Kg4JUFks1Mpn4d/reservations?item_id=${itemId}`);
  const allResevations = await response.json();
  allResevations.forEach((reservation) => {
    const reservespace = document.getElementById('all-reservations');
    const newReservation = document.createElement('p');
    reservespace.appendChild(newReservation);
    newReservation.textContent = `${reservation.date_start} - ${reservation.date_end} by ${reservation.username}`
    // const counter = allResevations.length;
    // return counter;
  });
};

export const countReservation = async (itemId) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KHwd97Kg4JUFks1Mpn4d/reservations?item_id=${itemId}`);
  const allResevations = await response.json();
  let counter = allResevations.length;
  return counter;
};
