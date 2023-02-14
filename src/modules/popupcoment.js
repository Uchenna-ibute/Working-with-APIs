
export const displaycommentPopup = (meal, likes, index, totalcomment,comment) => {
    const list = document.querySelector('.popup');
    const html = `
    <div id="comment popup>
    <div class="item">
      <img src="${meal.strMealThumb}" alt="food">
    </div>
    <div class="name">
      <p class='meal-name-card'>${meal.strMeal} <i class="fa-solid fa-heart" id="heart" data-id = "${index}"></i></p>
      <p class="total"> <span class='like'>${likes}</span> likes</p>
    </div>
    <div class="addcoment">  <h2>comment<span class="number">${totalcomment}</span></h2>  
    <ul class="displaycomment"> </ul>
    <form>
    <input type="text" id='name' placeholder='Your name' required>
    <input type="text" id='comment' placeholder='Your insights' required>
    <buttom type="submit" id="submitcomment">comment</button>
    </form>
    </div>
    </div>`;
    const item = document.createElement('li');
    item.setAttribute('data-id', meal.id);
    item.classList.add('list');
    item.innerHTML = html;
    list.appendChild(item);
    
    const displacomm = document.querryselector('displaycomment')
    comment.forEach((item) => {
    displacomm.innerHTML += `<li class="border">
    ${item.creation_date}:${item.username}:${item.comment} </li>`
    });
     
  }