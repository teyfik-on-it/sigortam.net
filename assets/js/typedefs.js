// typings for api

/**
 * @typedef {Object} OfferList
 * @property {Offer[]} offerList
 */

/**
 * @typedef {Object} Offer
 * @property {number} Cash
 * @property {string} FirmName
 * @property {string} ImagePath
 * @property {string} ProductDesc
 * @property {QuotaInfo} QuotaInfo
 * @property {boolean} SaleClosed
 * @property {PopoverContent[]} popoverContent
 */

/**
 * @typedef {Object} QuotaInfo
 * @property {boolean} HasDiscount
 * @property {number} PremiumWithDiscount
 */

/**
 * @typedef {Object} PopoverContent
 * @property {string} Description
 * @property {string} Title
 */

/**
 * @typedef {Object} OfferCount
 * @property {number} num_offers
 */

// typings for app state
/**
 *
 * @typedef {Object} State
 * @property {Offer[]} offers
 * @property {number} offerCount
 */

/**
 * @callback AddOffer
 * @param {State} state
 * @param {Offer} offer
 * @return {void}
 */

/**
 * @callback SetOfferCount
 * @param {State} state
 * @param {number} offerCount
 * @return {void}
 */

/**
 * @typedef {Object} Mutations
 * @property {AddOffer} addOffer
 * @property {SetOfferCount} setOfferCount
 */
