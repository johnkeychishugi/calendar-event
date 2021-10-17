const now = new Date();

const events = [
  {
    id: 0,
    title: 'High Performence Computing',
    allDay: true,
    start: new Date(2021, 9, 15),
    end: new Date(2021, 9, 16),
    external_ID: 123445
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2021, 10, 10),
    end: new Date(2021, 10, 15),
    external_ID: 123433
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2021, 2, 13, 0, 0, 0),
    end: new Date(2021, 2, 20, 0, 0, 0),
    external_ID: 123433
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2021, 10, 1, 0, 0, 0),
    end: new Date(2021, 10, 5, 0, 0, 0),
    external_ID: 123445
  },

  {
    id: 4,
    title: 'Federeted cloud workshop',
    start: new Date(2021, 9, 20, 10, 10, 0),
    end: new Date(2021, 9, 23, 1, 10, 0),
    external_ID: 123445
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2021, 3, 11),
    end: new Date(2021, 3, 13),
    desc: 'Big conference for important people',
    external_ID: 123445
  },
  {
    id: 6,
    title: 'Meeting Covid Impact IMMAP',
    start: new Date(2021, 3, 12, 10, 30, 0, 0),
    end: new Date(2021, 3, 13, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
    external_ID: 123445
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2021, 3, 12, 12, 0, 0, 0),
    end: new Date(2021, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
    external_ID: 123445
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2021, 3, 12, 14, 0, 0, 0),
    end: new Date(2021, 3, 13, 15, 0, 0, 0),
    external_ID: 123445
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2021, 3, 12, 17, 0, 0, 0),
    end: new Date(2021, 3, 19, 14, 30, 0, 0),
    desc: 'Most important meal of the day',
    external_ID: 123445
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2021, 3, 12, 20, 0, 0, 0),
    end: new Date(2021, 3, 13, 21, 0, 0, 0),
    external_ID: 123445
  },
  {
    id: 11,
    title: 'Planning Meeting with Paige',
    start: new Date(2021, 3, 15, 8, 0, 0),
    end: new Date(2021, 3, 16, 10, 30, 0),
    external_ID: 123445
  },
  {
    id: 11.1,
    title: 'Inconvenient Conference Call',
    start: new Date(2021, 3, 16, 9, 30, 0),
    end: new Date(2021, 3, 18, 12, 0, 0),
    external_ID: 123445
  },
  {
    id: 11.2,
    title: "Project Kickoff - Lou's Shoes",
    start: new Date(2021, 3, 13, 11, 30, 0),
    end: new Date(2021, 3, 14, 14, 0, 0),
    external_ID: 123445
  },
  {
    id: 11.3,
    title: 'Quote Follow-up - Tea by Tina',
    start: new Date(2021, 3, 13, 15, 30, 0),
    end: new Date(2021, 3, 17, 16, 0, 0),
    external_ID: 123445
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2021, 3, 17, 19, 30, 0),
    end: new Date(2021, 3, 18, 2, 0, 0),
    external_ID: 123445
  },
  {
    id: 12.5,
    title: 'Late Same Night Event',
    start: new Date(2021, 3, 17, 19, 30, 0),
    end: new Date(2021, 3, 17, 23, 30, 0),
    external_ID: 123445
  },
  {
    id: 13,
    title: 'Multi-day Event',
    start: new Date(2021, 3, 20, 19, 30, 0),
    end: new Date(2021, 3, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: 'Technical challenge Demo',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
    external_ID: 123445
  },
  {
    id: 15,
    title: 'Today Event',
    start: now,
    end: now,
    external_ID: 123445
  },
  {
    id: 16,
    title: 'Video Record',
    start: new Date(2021, 3, 14, 15, 30, 0),
    end: new Date(2021, 3, 15, 19, 0, 0),
    external_ID: 123445
  },
  {
    id: 17,
    title: 'Dutch Song Producing',
    start: new Date(2021, 3, 14, 16, 30, 0),
    end: new Date(2021, 3, 14, 20, 0, 0),
    external_ID: 123445
  },
  {
    id: 18,
    title: 'Itaewon Halloween Meeting',
    start: new Date(2021, 3, 14, 16, 30, 0),
    end: new Date(2021, 3, 15, 17, 30, 0),
    external_ID: 123445
  },
  {
    id: 19,
    title: 'Online Coding Test',
    start: new Date(2021, 3, 14, 17, 30, 0),
    end: new Date(2021, 3, 15, 20, 30, 0),
    external_ID: 123445
  },
  {
    id: 20,
    title: 'An overlapped Event',
    start: new Date(2021, 3, 10, 17, 0, 0),
    end: new Date(2021, 3, 14, 18, 30, 0),
    external_ID: 123445
  },
  {
    id: 21,
    title: 'Phone Interview',
    start: new Date(2021, 3, 14, 17, 0, 0),
    end: new Date(2021, 3, 13, 18, 30, 0),
    external_ID: 123445
  },
  {
    id: 22,
    title: 'Cooking Class',
    start: new Date(2021, 3, 10, 17, 30, 0),
    end: new Date(2021, 3, 14, 19, 0, 0),
    external_ID: 123445
  },
  {
    id: 23,
    title: 'Go to the gym',
    start: new Date(2021, 3, 18, 18, 30, 0),
    end: new Date(2021, 3, 19, 20, 0, 0),
    external_ID: 123445
  },
];

export default events;