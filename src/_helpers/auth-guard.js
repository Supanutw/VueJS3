
import { router } from '../router'
export function authGuard(to) {
    const account = false; //accountService.accountValue;
    if (account) {
        // logged in so return true
        console.log('logged true')
        return true;
    }else{
        console.log('not logged')
        // not logged in so redirect to login page with the return url
        router.push({ path: '/login', query: { returnUrl: to.fullPath } });
        
        return false;
    }
   
}