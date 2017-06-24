import Vue from 'vue'
import Router from 'vue-router'
const Hello = resolve => require(['@/components/Hello'], resolve);
const Home = resolve => require(['@/components/home/Home'], resolve);
const Entry = resolve => require(['@/Entry'], resolve);
const PaperBank = resolve => require(['@/components/bank/PaperBank'], resolve);
const Login = resolve => require(['@/components/login/Login'], resolve);

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/',
            name: 'Entry',
            component: Entry,
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: Home
                },
                {
                    path: 'paper-bank',
                    name: 'PaperBank',
                    component: PaperBank
                }
            ]
        },
        { path: '*', redirect: '/' }
    ]
});

export default router;
