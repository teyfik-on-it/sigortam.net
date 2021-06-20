import api from './api.js';

/**
 *
 * @return {Promise<OfferList>}
 */
const getSecondCase = () => api('/case2');

export default getSecondCase;
