
export const saveData = async () => {
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LhZCuIFbiLan1vds37EU/comments';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(
      {
        "item_id": "item2",
        "username": "Jane",
        "comment": "Hellochris"
      }
    ),
    });
  
    const res = await response.json();
    console.log(res);
    return res.result
  }
  
  export const getData = async () => {
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LhZCuIFbiLan1vds37EU/comments';
    const response = await fetch(url, {});
    const res = await response.json();
    console.log(res)
    return res.result
  }