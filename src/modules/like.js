export const incrementLikes = async (index) => {
  const res = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KHwd97Kg4JUFks1Mpn4d/likes',
    {
      method: 'post',
      body: JSON.stringify({ item_id: index }),
      headers: { 'content-type': 'application/json' },
    },
  );
  const predata = res.text();
  return predata;
};

export const likeItem = async () => {
  const res = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KHwd97Kg4JUFks1Mpn4d/likes',
  );
  const predata = res.json();
  return predata;
};
