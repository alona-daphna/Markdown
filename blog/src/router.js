import BlogList from './views/BlogList.vue'
import BlogView from './views/BlogView.vue'
import CreateBlog from './views/CreateBlog.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: BlogList
    },
    {
        path: '/create',
        component: CreateBlog
    },
    {
        path: '/read/:id',
        component: BlogView,
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})