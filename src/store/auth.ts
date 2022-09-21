import { defineStore } from 'pinia'
import axios from 'axios';
import router from '@/router';
interface IUserState {
    user?: any,
    returnUrl?: string
}

export const useAuthStore = defineStore('auth', {
    state: (): IUserState => ({
        user: undefined,
        returnUrl: undefined,
    }),

    getters: {
        isLoggedIn: (state) => !!state.user
    },

    actions: {
        async initAuth() {
            const user:any = this.user

            if (!user) {
                // const response = await $fetch('/api/user')
                // user = response.user
                console.log('hi')
            }

            this.updateUser(user)
        },

        async login (username:string, password:string) {
            const user = await axios.post('https://backend.zelix.fi/api/auth/local', { identifier: username, password: password })
            this.updateUser(user);
            router.push('/');
        },

        async logOut() {
            this.updateUser(undefined)
        },

        updateUser(payload: null | any) {
            this.user = payload
        }

    },
})