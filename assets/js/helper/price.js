/**
 * @param {Offer} offer
 * @return {number}
 */
const price = (offer) =>
  offer.QuotaInfo.HasDiscount
    ? offer.QuotaInfo.PremiumWithDiscount
    : offer.Cash;

export default price;
