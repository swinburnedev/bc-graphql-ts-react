import { getBasket } from './basket';
import { TDigitalItem } from '../types/basket';

const bundleSkus: Array<string> = [
    '39', // Rightmove - Featured Property
    '6', // Rightmove - Premium Listing
	'B-RM-1' // Premium + Featured
];

/**
 * Filter conflicting basket item
 * @param item - BC basket item
 * @returns true if item sku within bundleSkus
 */
const conflictItems = (item: TDigitalItem) => bundleSkus.includes(item.sku);

/**
 * Map basket item ids
 * @param item - BC basket item
 */
 const itemIds = (item: TDigitalItem) => item.id;

/**
 * TODO - support multiple conflicts or assume only ever 1?
 * 
 * Checks skus against those currently in basket
 * @param sku
 * @returns array conflicting basket id(s) or empty array
 */
export const getConflictItems = async (sku: string): Promise<number[]> => {
	if (!bundleSkus.includes(sku)) return [];

	const basket = await getBasket();
	const { digitalItems } = basket[0].lineItems || [];
	return digitalItems
		.filter(conflictItems)
		.map(itemIds);
}
