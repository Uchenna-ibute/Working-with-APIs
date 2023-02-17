const countReservation = () => Promise.resolve(
  {
    0: [
      { date_end: '2023-02-24', date_start: '2023-02-22', username: 'Ama' },
      { date_end: '2023-02-24', date_start: '2023-02-22', username: 'Ama' },
    ],
    1: [
      { date_end: '2023-02-24', date_start: '2023-02-22', username: 'Ama' },
      { date_end: '2023-02-24', date_start: '2023-02-22', username: 'Ama' },
    ],
  },
);

exports.countReservation = countReservation;
