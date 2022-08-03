import { rest } from 'msw';

const basket = {
    baseAmount: 149,
    cartAmount: 149,
    coupons: [],
    createdTime: '2022-08-01T07:36:18+00:00',
    currency: {
        code: 'GBP',
        decimalPlaces: 2,
        name: 'British Pounds',
        symbol: '£',
    },
    customerId: 0,
    discountAmount: 0,
    discounts: [
        {
            discountedAmount: 0,
            id: '98cafeb4-7c22-4e81-ac09-8ddcdd6165c1',
        },
    ],
    email: '',
    id: 'b51dbef9-ac54-4163-a70b-34edf90cdb31',
    isTaxIncluded: true,
    lineItems: {
        customItems: [],
        digitalItems: [
            {
                brand: '',
                couponAmount: 0,
                discountAmount: 0,
                discounts: [],
                extendedListPrice: 149,
                extendedSalePrice: 149,
                id: '98cafeb4-7c22-4e81-ac09-8ddcdd6165c1',
                imageUrl:
                    'https://cdn11.bigcommerce.com/r-cf8dc1a36e37ca22115036b22a6b2976a6384be1/themes/ClassicNext/images/ProductDefault.gif',
                isMutable: true,
                isShippingRequired: false,
                isTaxable: true,
                listPrice: 149,
                name: 'Rightmove - Featured Property',
                parentId: null,
                productId: 136,
                quantity: 1,
                salePrice: 149,
                sku: '39',
                type: 'digital',
                url: 'https://commerce.qa.pbr.so/rightmove-featured-property/',
                variantId: 101,
            },
        ],
        giftCertificates: [],
        physicalItems: [],
    },
    locale: 'en',
    updatedTime: '2022-08-01T07:36:19+00:00',
};

export const handlers = [
    rest.get('/login/1', (req, res, context) => {
        return res(context.status(200), context.text('Done'));
    }),
    rest.post('/api/storefront/cart', (req, res, context) => {
        return res(
            context.status(200),
            context.delay(100),
            context.json(basket)
        );
    }),
];
