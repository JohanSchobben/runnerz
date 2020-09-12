<template>
    <header>
        <MenuIcon/>
        <div></div>
    </header>
</template>
<script lang="ts">
import MenuIcon from './icons/MenuIcon.vue';
export default {
    components: {
        MenuIcon
    }
}
</script>
<style lang="scss" scoped>
    @import "../styles/vars";
    header {
        display: flex;
        justify-content: space-between;
        padding: 0 $side-padding;
        align-items: center;
        flex: 0 0 4.5rem;
    }
    div {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: #eee;
    }

</style>