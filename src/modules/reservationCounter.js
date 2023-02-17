const countReservation = async (itemId) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KHwd97Kg4JUFks1Mpn4d/reservations?item_id=${itemId}`);
  const allResevations = await response.json();
  const counter = allResevations.length;
  return counter;
};



export default countReservation;