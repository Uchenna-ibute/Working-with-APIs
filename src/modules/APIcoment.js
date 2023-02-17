export const saveData = async (id, username, comment) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4MVrrJK7zcMBj3JVTSQH/comments';

  const comments = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
  });

  const res = comments.text();
  return res;
};

export const getData = async (id) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4MVrrJK7zcMBj3JVTSQH/comments';
  const indentifierurl = `${url}?item_id=${id}`;
  const response = await fetch(indentifierurl);
  const res = response.json();
  return res;
};
