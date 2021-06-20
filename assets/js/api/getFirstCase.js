import api from './api.js';

/**
 *
 * @return {Promise<OfferList>}
 */
const getFirstCase = () => api('/case1');

export default getFirstCase;
