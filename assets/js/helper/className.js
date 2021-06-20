/**
 * @callback classNameFn
 * @returns {string}
 */

/**
 * @class
 * @property {string} class
 * @param {string} existing
 * @returns {classNameFn}
 */
const className = (existing) => {
  return function () {
    return existing + (this.class ? ' ' + this.class : '');
  };
};

export default className;
