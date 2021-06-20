const base = 'https://snetmyapp.herokuapp.com';

/**
 *
 * @param {string} endpoint
 * @returns {string}
 */
const url = (endpoint) => new URL(endpoint, base).toString();

/**
 *
 * @param {RequestInfo} input
 * @param {RequestInit} init
 * @returns {Promise<*>}
 */
const api = async (input, init = null) => {
  if (null == input) {
    throw new TypeError('input must be a string or an object');
  }

  if ('string' === typeof input) {
    input = url(input);
  }

  if ('object' === typeof input) {
    input.url = url(input.url);
  }

  return fetch(input, init).then((res) => res.json());
};

export default api;
