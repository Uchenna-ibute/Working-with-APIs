import { saveData, getData } from './APIcoment';

export const displaycomment = async (index) => {
  const comentData = getData(index);
  console.log('check data to display here:', comentData);
  const displaycomm = document.getElementsByClassName('.displaycomment');
  comentData.forEach((item) => {
    displaycomm.innerHTML += `<li class="border">
  ${item.creation_date}:${item.username}:${item.comment} </li>`;
  });
};

export const addcomment = (index) => {
  const adding = document.getElementById('submit');
  const item_id = Number(index);
  adding.addEventListener('click', async (e) => {
    const username = document.getElementById('name');
    const comment = document.getElementById('comment');
    const savedData = saveData(item_id, username.value, comment.value);
    console.log('check data saved:', savedData);
    username.value = '';
    comment.value = '';
    const comentData = getData(index);
    console.log("check data added:", comentData)
    // displaycomment(comentData);
  });
};

export const displaycommentPopup = (meal, likes, index) => {
  const addcoment = document.querySelectorAll('.comment');
  const mealblur = document.querySelector('.meal');
  addcoment.forEach((pop) => {
    pop.addEventListener('click', () => {
      if (Number(pop.id) === index) {
        const list = document.querySelector('.popup');
        const html = `
    <div class="item">
      <img class="popupimg" src="${meal.strMealThumb}" alt="food">
    </div>
    <div class="popupname flexcolumn">
      <h1 class='popup_meal-name-card'>${meal.strMeal} <i class="fa-solid" id="heart" data-id = "${index}"></i></h1>
      <p class="popuptotal"> <span class='like'>${likes}</span> likes</p>
    </div>
    <div class="addcoment flexcolumn"><h3>comment<span class="number"></span></h3></div>
    <div class="displaycomment"> </div>
    <form class="flexcolumn">
    <input type="text" id='name' placeholder='Your name' required>
    <input type="text" id='comment' placeholder='Your insights' required>
    <button type="submit" id="submit">Submit</button>
    </form>
    </div>`;
        const item = document.createElement('li');
        item.setAttribute('data-id', meal.id);
        item.classList.add('list');
        item.innerHTML = html;
        list.appendChild(item);
        list.style.display = 'block';
        mealblur.style.filter = 'blur(10px)';

        addcomment(index);
        // displaycomment(index);
      }
    });
  });
};

export const countcoment = async (index) => {
  const coment = await getData(index);
  let count = 0;
  coment.forEach((element) => {
    count += 1;
  });
  return count;
};
