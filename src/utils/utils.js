const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
const currMonthIdx = new Date().getMonth();

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

export const filterByLive = collectibles => (
  collectibles.filter(collectible => collectible.liveOnly)
);

export const musicSearch = (music, term) => {
  if (term === '') return music;

  return music.filter(collectible => collectible.name.split('.').join('').toLowerCase().includes(term));
}

export const filterByFoundFossils = (fossils, components) => (
  fossils.filter(fossil => {
    const fossilComponents = fossil.components.map(id => components[id]);
    return !fossilComponents.map(com => com.found).reduce((acc, el) => acc && el);
  })
);


export const filterByTimeAvailable = (collectibles, time) => {
  if (time === null) return collectibles;

  return collectibles.filter(collectible => {
    const { times } = collectible;
    if (times.length === 1 && times[0].start === 0 && times[0].end === 0) return true;

    return times.map(range => {
      if (range.start < range.end) return range.start <= time && range.end > time;
      else return range.start <= time || range.end > time;
    }).reduce((acc, el) => acc || el);
  });
};

export const hideAllDay = (collectibles, hideAllDay) => {
  if (!hideAllDay) return collectibles;

  return collectibles.filter(collectible => {
    const { times } = collectible;
    if (times.length > 1) return true;

    return !(times[0].start === 0 && times[0].end === 0);
  });
}

export const filterByLocation = (collectibles, location) => (
  collectibles.filter(collectible => collectible.location.includes(location))
)
