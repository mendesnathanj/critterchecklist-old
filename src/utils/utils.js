const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
const currMonthIdx = new Date().getMonth();

export const fileName = name => (
  name.toLowerCase().split(' ').join('_').replace(/'/, '').replace(/\./g, '') + '.png'
)

export const parsedTime = times => {
  return times.map(timeframe => {
    if (timeframe.start === 0 && timeframe.end === 0) return 'All Day';

    return Object.values(timeframe).map(value => {
      if (value > 12) return `${value % 12} PM`;
      else return `${value} AM`;
    }).join(' - ');
  });
};


export const filterByActiveMonth = (collectibles, hemisphere) => (
  collectibles.filter(collectible => collectible.months[hemisphere][months[currMonthIdx]])
);

export const filterByLeaving = (collectibles, hemisphere) => (
  collectibles.filter(collectible => {
    const availableThisMonth = collectible.months[hemisphere][months[currMonthIdx]];
    const unavailableNextMonth = !collectible.months[hemisphere][months[(currMonthIdx + 1) % months.length]];

    return (availableThisMonth && unavailableNextMonth);
  })
);

export const search = (collectibles, term) => {
  if (term === '') return collectibles;

  return collectibles.filter(collectible => collectible.name.toLowerCase().includes(term));
}

export const filterByFound = collectibles => (
  collectibles.filter(collectible => !collectible.found)
);
