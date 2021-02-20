import { router } from '../router';

export const accountService = {
    login,
    // apiAuthenticate,
    // logout,
    // getAll,
    // getById,
    // update,
    // delete: _delete,
    // account: accountSubject.asObservable(),
    // get accountValue () { return accountSubject.value; }
};
async function login() {
    // login with facebook then authenticate with the API to get a JWT auth token
    // const { authResponse } = await new Promise(FB.login);
    // if (!authResponse) return;

    // await apiAuthenticate(authResponse.accessToken);

    // get return url from query parameters or default to home page
    const returnUrl = router.currentRoute.value.query['returnUrl'] || '/';
    router.push(returnUrl);
}
