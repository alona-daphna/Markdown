<template>
    <div class="wrapper">
        <textarea @keydown.enter="focusContent($event)" v-model="blogTitle" ref="title" placeholder="Title" class="note-title" cols="30" rows="10"></textarea>
        <hr class="title-divider">
        <textarea v-model="blogContent" ref="content" class="notebook" cols="30" rows="10"></textarea>
    </div>
<div class="delete-blog">
    <hr>
    <button @click="submitBlog()" class="submit-btn">Submit</button>
</div>
</template>
<script>
import axios from '../utils/axiosInstance'

export default {
    name: 'CreateBlog',
    data() {
        return {
            blogTitle: '',
            blogContent: ''
        }
    },
    methods: {
        submitBlog() {
            axios.post('/blogs', {
                title: this.blogTitle,
                content: this.blogContent.replace(/\n/g, '\\n')
            })

            this.$router.push('/')
        },
        focusContent(event) {
            event.preventDefault()
            this.$refs.content.focus()
        }
    },
    mounted() {
        this.$refs.title.focus()
    }
}
</script>
<style>
.title-divider {
    width: 700px;
    margin: auto;
    margin-bottom: 25px;
}
.note-title, .notebook {
    width: 700px;
    margin: auto;
    display: flex;
    border: none;
    margin-bottom: 10px;
}
.note-title {
    max-height: 3rem;
    overflow: hidden;
    font-size: 2.5rem;
    font-weight: 700;
}


.wrapper {
    height: 100%;
}
.notebook {
    font-size: 1.2rem;
    line-height: 1.8rem;
    height: 100%;
    overflow-y: hidden;
}

textarea {
    border: none;
    outline: none;
    resize: none;
}
::placeholder {
    color: #ececec;
}

.submit-btn {
    background: #1ee761;
    color: #2c3e50;
    font-weight: 500;
}

.submit-btn:hover {
    background: #3cf87b;
}
</style>