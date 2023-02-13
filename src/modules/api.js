export const meals = async () => {
  const res = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast',
  );
  const data = await res.json();
  return data;
};

export const dataid = async () => {
  const res = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
    { method: 'post' },
  );
  const data = await res.text();
  return data;
};

dataid();
