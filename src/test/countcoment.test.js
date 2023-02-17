/**
 * @jest-environment jsdom
 */
/* eslint-disable import/no-unresolved */

const countcoments = require('../modules/countcoment');

describe('test to count coments: ', () => {
    test('count comment', () => {
       document.body.innerHTML = `
    <p class="comment"></p>
    <p class="comment"></p>
    <p class="comment"></p>
    `;
    const comments = document.querySelectorAll('.comment');
    const totalcomments = countcoments(comments);
    expect(totalcomments).toBe(3);
       });
    test('count comment', () => {
        document.body.innerHTML = `
    `;
    const comments = document.querySelectorAll('.comment');
    const totalcomments = countcoments(comments);
    expect(totalcomments).toBe(0);
    });
});
  