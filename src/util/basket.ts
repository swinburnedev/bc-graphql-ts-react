/**
 * TODO
 * !! Need to use SKUs as entity / id will vary per env
 * if product is within collection,
 *  then do necessary add / rmeove of other collection items
 * else
 *  add to basket
 * */
export const addToBasket = (entityId: number) => {
    // {{base_url}}/api/storefront/cart
};

export const getBasket = () => {
    fetch(`${process.env.REACT_APP_STORE_API}/api/storefront/cart`, {
        // mode: 'no-cors'
    }).then(res => {
        console.log('get basket json:', res);
        return res.json();
    });
};

export const createBasket = (entityId: number) => {
    // TODO basket type
    console.log('createBasket:', entityId);
    const data: any = {
        line_items: [
            {
                quantity: 1,
                product_id: entityId,
            },
        ],
        channel_id: 1,
    };
    const options: RequestInit = {
        method: 'POST',
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify(data),
    };
    fetch(`${process.env.REACT_APP_STORE_API}/api/storefront/cart`, options)
        .then(res => {
            console.log('basket res:', res);
            return res;
        })
        .then(res => {
            console.log('basket json:', res.json());
            return res.json();
        })
        .catch(err => console.error(err));
};
