<template>
  <div class="col-md-6 offset-md-3 mt-5 text-center">
        <div class="card">
            <h4 class="card-header">Vue 3 Facebook Login Example</h4>
            <div class="card-body">
                <button class="btn btn-facebook" @click="login">
                    <i class="fa fa-facebook mr-1"></i>
                    Login with Facebook
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { router } from '../router';
import { accountService } from '../services/account.service';
export default {
  setup() {
        // redirect to home if already logged in
        const isLogin = false;
        if (isLogin) {
            // console.log('xxx')
            // router.push('/');
            // this.$router.push('/')
            // this.$router.push('/')
             router.push('/');
        }

        return {
            login: accountService.login
        };
    }

}
</script>

<style>

</style>