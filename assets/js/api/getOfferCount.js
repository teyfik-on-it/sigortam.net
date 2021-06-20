import api from './api.js';

/**
 *
 * @return {Promise<OfferCount>}
 */
const getOfferCount = () => api('/get_offer_count');

export default getOfferCount;
