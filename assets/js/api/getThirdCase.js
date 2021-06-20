import api from './api.js';

/**
 *
 * @return {Promise<Offer>}
 */
const getThirdCase = () => api('/case3');

export default getThirdCase;
