import { getConflictItems } from './conflict';

const options: RequestInit = {
    method: 'POST',
    mode: 'cors',
    headers: new Headers({
        'Content-Type': 'application/json',
    }),
};

export const addToBasket = async (entityId: number, sku: string) => {
    console.log('entityId:', entityId, 'sku:', sku);
    const conflicts = await getConflictItems(sku);
    console.log(conflicts);

    // TODO - support multiple conflicts or assume only ever 1?
    if (Array.isArray(conflicts) && conflicts.length === 1) {
        // remove conflict from basket
        const removed = await removeBasketItem(conflicts[0]);
        console.log('removed:', removed);
    }
    // add to basket
    const basket = await addBasketItem(entityId);
    console.log('add:', basket);
}

export const addBasketItem = async (entityId: number) => {
    const data: any = {
        line_items: [
            {
                quantity: 1,
                product_id: entityId,
            },
        ],
    };

    const response = await fetch(`${process.env.REACT_APP_STORE_API}/api/storefront/cart/items`, { ...options, body: JSON.stringify(data) })
    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
    return await response.json();
};

export const removeBasketItem = async (entityId: number) => {
    const data: any = {
        line_items: [
            {
                quantity: 1,
                product_id: entityId,
            },
        ],
    };
    const response = await fetch(`${process.env.REACT_APP_STORE_API}/api/storefront/cart/items/${entityId}`,
    {   ...options,
        body: JSON.stringify(data),
        method: 'delete'
    })
    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
    return await response.json();
};

export const getBasket = async () => {
    const response = await fetch(`${process.env.REACT_APP_STORE_API}/api/storefront/cart`);
    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
    return await response.json();
};

export const createBasket = (entityId: number) => {
    const data: any = {
        line_items: [
            {
                quantity: 1,
                product_id: entityId,
            },
        ],
        channel_id: 1,
    };

    fetch(`${process.env.REACT_APP_STORE_API}/api/storefront/cart`, { ...options, body: JSON.stringify(data) })
        .then(res => {
            console.log('basket json:', res.json());
            return res.json();
        })
        .catch(err => console.error(err));
};
