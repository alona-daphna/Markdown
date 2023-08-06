<template>
    <nav>
        <div class="logo">
            <router-link to="/">
                <span>Note</span>
                <span>book</span>
            </router-link>
        </div>
        <ul>
            <li><router-link to="/create"><button class="primary-btn">Create</button></router-link></li>
            <li><button class="secondary-btn">Logout</button></li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'NavbarVue'
}
</script>
<style>
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 30px;

}
.logo {
    margin-left: 100px;
    color: #2c3e50;
}


.logo span {
    font-weight: 700;
    font-size: 3rem;
    display: inline;
    background: -webkit-linear-gradient(0deg, #02ff74 10%, #2c3e50 0%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
    text-transform: uppercase;
}

.logo:hover {
    color: #1dee7b;
}

nav ul {
    display: flex;
    gap: 10px;
    margin-right: 20px;
}

.primary-btn {
    color: #fff;
    background: #2c3e50;
}

.primary-btn:hover {
    background: #1dee7b;
}
</style>