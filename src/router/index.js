import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
const Home = resolve => require(['@/components/home/Home'], resolve);
const Entry = resolve => require(['@/Entry'], resolve);

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/',
            name: 'Entry',
            component: Entry,
            children: [{
                path: '',
                name: 'Home',
                component: Home
            }]
        }
    ]
})
