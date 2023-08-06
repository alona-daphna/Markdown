<template>
    <div class="blog-article">
    <h3>{{ blog.title }}</h3>
    <span>{{ blog.created_at }}</span>
    <p>{{ blog.description }}</p>
</div>
</template>
<script>

export default {
    name: 'BlogList',
    props: ['blog'],
    data() {
        return {
            blogs: []
        }
    },
}
</script>
<style>

span {
    color: #00df64;
    font-weight: 500;
    font-size: .9rem;
    display: block;
    margin-top: 5px;
}

h3 {
    font-size: 1.5rem;
}

p {
    font-size: 1.1rem;
    margin-top: 12px;
}

.blog-article {
    padding: 20px;
}
</style>