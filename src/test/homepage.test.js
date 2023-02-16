/**
 * @jest-environment jsdom
 */
/* eslint-disable import/no-unresolved */
import homePageCount from '../modules/homePage.js';
const countcoments = require('../modules/countcoment');

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
    const arr = [
      { comment: 'chris', age: '26' },
      { comment: '178 cm' },
      { address: 'Bwiza', comment: '' },
      { comment: '', status: 'no', tel: '54673' },
    ];
    const count = countcoments(arr);
    expect(count).toBe(2);
  });
  test('count comment', () => {
    const arr = [
      { name: 'chris', age: '26', comment: '' },
      { height: '178 cm', comment: '' },
      { address: 'Bwiza', comment: '' },
      { status: 'no', tel: '54673', comment: '' },
    ];
    const count = countcoments(arr);
    expect(count).toBe(0);
  });
});
