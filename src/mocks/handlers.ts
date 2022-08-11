import { rest } from 'msw';
import basket from './responses/basket.json';
import retrieveBasket from './responses/retrieveBasket.json';
import removeBasketItem from './responses/removeBasketItem.json';

export const handlers = [
    rest.get('/login/1', (req, res, context) => {
        return res(context.status(200), context.text('Done'));
    }),
    rest.get('/api/storefront/cart', (req, res, context) => {
        return res(
            context.status(200),
            context.json(retrieveBasket)
        );
    }),
    rest.post('/api/storefront/cart', (req, res, context) => {
        return res(
            context.status(200),
            context.delay(100),
            context.json(basket)
        );
    }),
    rest.post('/api/storefront/cart/items', (req, res, context) => {
        return res(
            context.status(200),
            context.json(basket)
        );
    }),
    rest.delete('/api/storefront/cart/items/:item', (req, res, context) => {
        return res(
            context.status(200),
            context.json(removeBasketItem)
        );
    }),
];
