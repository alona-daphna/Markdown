<template>
    <div class="blog-content">
        <h1>{{ blog.title }}</h1>
        <hr class="hr-title">
        <div v-html="blog.content"></div>
    </div>
        <div class="delete-blog">
            <hr>
            <button @click="deleteBlog" class="delete-btn">Delete</button>
        </div>
</template>
<script>
import axios from '../utils/axiosInstance'

export default {
    name: 'BlogView',
    props: ['id'],  
    data() {
        return {
            blog: {},
        }
    },
    async mounted() {
        await this.fetchBlog();
    },
    methods: {
        async fetchBlog() {
            this.blog = (await axios(`/blogs/${this.$route.params.id}`)).data
        },
        async deleteBlog() {
            await axios.delete(`blogs/${this.$route.params.id}`)
            this.$router.push('/')
        }
    }
}
</script>
<style>
body {
    position: relative;
}
.blog-content {
    max-width: 700px;
    margin: auto;
}
.hr-title {
    border: 2px solid #eeeeee;
}

h1 {
    margin-bottom: 10px;
    font-size: 2.4rem;
}
 h3 {
    margin-bottom: 10px;
 }

hr {
    border: 1px solid #eeeeee;
    width: 100%;
    margin-bottom: 15px;
    margin-top: 10px;
}

.delete-blog {
    text-align: center;
    margin: auto;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
}
.delete-btn {
    color: #fff;
    background: rgb(255, 33, 63);
    filter: drop-shadow(0px 4px 4px #ff00268e);
}

.delete-btn:hover {
    background: rgb(255, 48, 76);
}
</style>