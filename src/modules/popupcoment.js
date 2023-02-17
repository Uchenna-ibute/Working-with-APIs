import { saveData, getData } from './APIcoment';

const displaycomment = async (index) => {
  const comentData = await getData(index);
  const displaycomm = document.querySelector('.displaycomment');
  comentData.forEach((coment) => {
    const eachComment = document.createElement('p');
    displaycomm.appendChild(eachComment);
    eachComment.innerHTML = `${coment.creation_date} : ${coment.username} : ${coment.comment}`;
  });
};

const addcomment = (index) => {
  const adding = document.getElementById('submit');
  const item_id = Number(index);
  adding.addEventListener('click', async (e) => {
    const username = document.getElementById('name');
    const comment = document.getElementById('comment');
    if(username.value && comment.value !== ""){
    saveData(item_id, username.value, comment.value);
    }
    reset(index)
    countcoment(index);
    displaycomment(index);
  });
};

const countcoment = async (index) => {
  const comments = await getData(index);
  let count = 0;
  comments.forEach((item) => {
    if (item.comment !== '') {
      count += 1;
    }
  });
  const addcount = document.querySelector('.number');
  addcount.innerHTML = `${count}`;
};

const closePop = () => {
  const closeup = document.querySelector('.pop-up-close-btn');
  closeup.addEventListener('click', () => {
    const mealblur = document.querySelector('.meal');
    let popupclose = document.querySelector('.popup');
    popupclose.innerHTML = '';
    popupclose.removeAttribute('style');
    mealblur.style.filter = 'none';
  });
};

const reset = () => {
    const form = document.getElementById('form');
    form.reset();
    const commentspace = document.querySelector('.displaycomment');
    commentspace.innerHTML = '';
};

export const displaycommentPopup = async (meal, likes, index) => {
  const addcoment = document.querySelectorAll('.comment');
  const mealblur = document.querySelector('.meal');
  addcoment.forEach((pop) => {
    pop.addEventListener('click', async () => {
      if (Number(pop.id) === index) {
        // const totalcount = await countcoment(index);
        countcoment(index);
        const list = document.querySelector('.popup');
        const html = `
    <div class="item">
      <img class="popupimg" src="${meal.strMealThumb}" alt="food">
      <p class="pop-up-close-btn">&#10005;</p>
    </div>
    <div class="popupname flexcolumn">
      <h1 class='popup_meal-name-card'>${meal.strMeal} <i class="fa-solid" id="heart" data-id = "${index}"></i></h1>
      <p class="popuptotal"> <span class='like'>${likes}</span> likes</p>
    </div>
    <div class="addcoment flexcolumn">
    <h3 class="count">comment
    <span class="number"> </span>
    </h3>
    </div>
    <div class="displaycomment flexcolumn"> </div>
    <form id="form" class="flexcolumn form">
    <input type="text" id='name' placeholder='Your name' required>
    <input type="text" id='comment' placeholder='Your insights' required>
    <button type="button" id="submit">Submit</button>
    </form>
    </div>`;
        const item = document.createElement('li');
        item.setAttribute('data-id', meal.id);
        item.classList.add('list');
        item.innerHTML = html;
        const divitem = document.querySelector('.item');
        list.appendChild(item);
        list.style.display = 'block';
        mealblur.style.filter = 'blur(10px)';

        closePop();
        addcomment(index);
        displaycomment(index);
      }
    });
  });
};

