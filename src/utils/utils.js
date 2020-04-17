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
