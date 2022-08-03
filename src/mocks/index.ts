export const initMocks = () => {
    if (typeof window !== 'undefined') {
        const { worker } = require('./browser');
        worker.start();
    }
};
