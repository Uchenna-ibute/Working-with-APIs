/**
 * @jest-environment jsdom
 */
/* eslint-disable import/no-unresolved */
import homePageCount from '../modules/homePage.js';
import countcoment from '../modules/coutcoment.js';


describe('test for meal and coment: ', () => {
  test('9 meals Added', () => {
    document.body.innerHTML = `
     <div class="wrap">
        <li class="list"></li>
        <li class="list"></li>
        <li class="list"></li>
        <li class="list"></li>
        <li class="list"></li>
    </div>
        `;
    const meals = homePageCount();
    expect(meals).toBe(5);
  });

  test('No Movies were added [0]', () => {
    document.body.innerHTML = '<div class="wrap"></div>';
    const meals = homePageCount();
    expect(meals).toBe(0);
  });

  test('count comment', () => {
    const arr = [{coment1: "chris"}, {coment2: "26"}, {coment3:"178 cm"}, {coment4: "Bwiza"},{coment5: "no"}]
    const count = countcoment(arr)
    expect(count).toBe(5);
  });
});