<template>
    <nav>
        <router-link exact-active-class="active" to="/">Training</router-link>
        <router-link exact-active-class="active" to="/sprint">Sprint</router-link>
        <router-link exact-active-class="active" to="/overview">Overview</router-link>
    </nav>
</template>
<script lang="ts">
export default {}
</script>
<style lang="scss" scoped>
    nav { 
        flex: 0 0 4.5rem;
        background: #3e3e3f;
        color: #fff;
        justify-content: space-evenly;
        display: flex;
        align-items: center;
    }
    a { 
        color: #fff;
        text-decoration: none;
    }
    .active {
        background-color: orange;
        border-radius: 1rem;
        padding: .5rem;
    }
</style>
