import { saveData, getData } from './APIcoment';

const displaycomment = async (index) => {
  const comentData = await getData(index);
  console.log('check data to display here:', comentData);
  const displaycomm = document.getElementsByClassName('.displaycomment');
  displaycomm.innerHTML = '';
  for(let i = 0; i<2; i++) {
    console.log(comentData[i].creation_date)
    console.log(comentData[i].username)
    console.log(comentData[i].comment)
    displaycomm.innerHTML += `<li class="border">${comentData[i].creation_date}:${comentData[i].username}:${comentData[i].comment}</li>`;
  };
};

const addcomment = (index) => {
  const adding = document.getElementById('submit');
  const item_id = Number(index);
  adding.addEventListener('click', async (e) => {
    const username = document.getElementById('name');
    const comment = document.getElementById('comment');
    const savedData = saveData(item_id, username.value, comment.value);
    console.log('check data saved:', savedData);
    username.value = '';
    comment.value = '';
    displaycomment(index);

  });
};

export const countcoment = async (index) => {
  const coment = await getData(index);
  let count = coment.length;
  console.log("length is: ", count)
  return count;
};

const closePop = () => {
  const popupclose = document.querySelector('.popup');
  popupclose.style.display = 'none';
}

export const displaycommentPopup = async (meal, likes, index) => {
  const addcoment = document.querySelectorAll('.comment');
  const mealblur = document.querySelector('.meal');
  addcoment.forEach((pop) => {
    pop.addEventListener('click', async() => {
      if (Number(pop.id) === index) {
        const totalcount = await countcoment(index)
        const list = document.querySelector('.popup');
        const html = `
    <div class="item">
      <img class="popupimg" src="${meal.strMealThumb}" alt="food">
    </div>
    <div class="popupname flexcolumn">
      <h1 class='popup_meal-name-card'>${meal.strMeal} <i class="fa-solid" id="heart" data-id = "${index}"></i></h1>
      <p class="popuptotal"> <span class='like'>${likes}</span> likes</p>
    </div>
    <div class="addcoment flexcolumn"><h3 class="count">comment<span class="number">${totalcount}</span></h3></div>
    <div class="displaycomment"> </div>
    <form class="flexcolumn">
    <input type="text" id='name' placeholder='Your name' required>
    <input type="text" id='comment' placeholder='Your insights' required>
    <button type="submit" id="submit">Submit</button>
    </form>
    </div>`;
        const image = document.createElement('img');
        image.setAttribute('src', './Enabled.png');
        image.setAttribute('class', 'close');
        const item = document.createElement('li');
        item.setAttribute('data-id', meal.id);
        item.classList.add('list');
        item.innerHTML = html;
        item.appendChild(image);
        list.appendChild(item);
        list.style.display = 'block';
        mealblur.style.filter = 'blur(10px)';

        addcomment(index);
        displaycomment(index);
      }
    });
  });
};



