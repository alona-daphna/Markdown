<template>
    <div class="blog-container">
        <div v-for="blog in blogsFormattedDates" :key="blog.id" class="blog-card">
            <router-link :to="'/read/' + blog.id">
                <BlogArticle :blog="blog"/>
            </router-link>
        </div>
    </div>
</template>
<script>
import axios from '../utils/axiosInstance'
import BlogArticle from '@/components/BlogArticle.vue'

export default {
    name: 'BlogList',
    components: {
        BlogArticle
    },
    data() {
        return {
            blogs: []
        }
    },
    async mounted() {
        await this.fetchBlogs()
    },
    computed: {
        blogsFormattedDates() {
            return this.blogs.map(blog => {
                return {...blog, created_at: new Date(blog.created_at).toDateString()}
            })
        }
    },
    methods: {
        async fetchBlogs() {
            this.blogs = (await axios('/blogs')).data
        }
    }
}
</script>
<style>
.blog-container {
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 40px;
}

.blog-card {
    border-radius: 7px;
    border: 1px solid #e0e0e0;
    background: #f7f7f7;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0,0,0,.1);
    
}

.blog-card:hover {
 transform: translateY(-4px);
 transition: transform .2s ease-in-out;
}
</style>