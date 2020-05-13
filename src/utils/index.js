import { fromUnixTime, formatDistanceStrict } from 'date-fns';

export const getFormattedCreationDate = (time) => {
  const creationDate = fromUnixTime(time);
  const timePast = formatDistanceStrict(creationDate, Date.now(), {
    roundingMethod: 'floor'
  });
  return `${timePast} ago`;
};