/**
  To generate a complete URL to an subPath based on your current location
  The subPath should not start or end with slashes.
**/
export const getSubPathURL = (subPath, { origin, pathname, search }) => (
  origin + pathname + subPath + search
);

/**
  To return a random item of an array.
**/
export const getRandomFromArray = array => array[Math.floor(Math.random() * array.length)];

/**
  Parse a query string like '?name=anonymous&expression=sad' to an object
  like {name: "anonymous", expression: "sad"}.
  (modified by me, orignal source at https://github.com/intesso/url-query)
**/
export const parseQueryString = (queryString = '') => {
  const query = {};

  queryString.trim()
  .replace(/^(\?)/, '')
  .split('&')
  .forEach((q) => {
    const segment = q.split('=');
    query[segment[0]] = segment.length > 1 ? segment[1] : true;
  });

  return query;
};
