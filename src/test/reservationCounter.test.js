jest.mock('../modules/reservationCounter.js');

const { countReservation } = require('../modules/reservationCounter.js');

describe('test reservation counter', () => {
  test('number of reservations should be 2 ', () => {
    countReservation().then((reservation) => {
      const objectLenght = Object.keys(reservation).length;
      expect(objectLenght).toBe(2);
    });
  });

  test('number of reservations should be >= 1', () => {
    countReservation().then((reservation) => {
      const objectLenght = Object.keys(reservation).length;
      expect(objectLenght).toBeGreaterThanOrEqual(1);
    });
  });

  test('number of reservations should be > 1', () => {
    countReservation().then((reservation) => {
      const values = Object.values(reservation);
      expect(values.length).toBeGreaterThan(1);
    });
  });

  test('promise returned should be defined ', () => {
    countReservation().then((reservation) => {
      expect(reservation).toBeDefined();
    });
  });

  test('promise returned should not be undefined ', () => {
    countReservation().then((reservation) => {
      expect(reservation).not.toBeUndefined();
    });
  });

  test('checking the truthyness of async mock ', () => {
    countReservation().then((reservation) => {
      if (reservation.keys !== 0) {
        expect(reservation).toBeTruthy();
      }
    });
  });
});