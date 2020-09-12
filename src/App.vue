<template>
<div class="page">
  <NavBar/>
  <main>
    <router-view />
  </main>
  <BottomNavigation />
</div>

</template>
<script lang="ts">
import NavBar from "./components/NavBar.vue"
import BottomNavigation from "./components/BottomNavigation.vue"
export default {
  components: {
    NavBar,
    BottomNavigation
  }
}
</script>
<style lang="scss" scoped>
  @import "./styles/vars";
  .page {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  main {
    flex: 1;
    padding: 3.5rem $side-padding 0 $side-padding;
  }
</style>