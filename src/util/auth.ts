export const doLogin = (userId: number) => {
    fetch(`${process.env.REACT_APP_STORE_API}/login/${userId}`, {
        mode: 'no-cors',
    }).catch(err => console.error(err));
};
