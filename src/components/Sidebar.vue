<template>
  <div>
    <button @click="openSidebar" class="trigger">
        <MenuIcon/>
    </button>
    <div v-if="isOpen" class="backdrop" @click="closeSidebar">
      <div class="sidebar" @click.stop>
          <div class="sidebar__header">
              Runnerz
          </div>
          <div class="sidebar__item">
              Vorige sprints
          </div>
          <div class="sidebar__item">
              progress
          </div>
          <div class="sidebar__item">
              Profiel
          </div>
          <div class="sidebar__item">
              Instellingen
          </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import MenuIcon from "./icons/MenuIcon.vue";
export default {
    components: {
        MenuIcon
    },
    props: [
        "open"
    ],
    data() {
        return {
            isOpen: this.open
        }
    },
    methods: {
        closeSidebar(){
            this.isOpen = false;
        },
        openSidebar() {
            this.isOpen = true;
        }
    },
    watch: {
        open(newVal){
            this.isOpen = newVal
        }
    }

}
</script>

<style lang="scss" scoped>

    .sidebar {
        display: flex;
        flex-direction: column;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 350px;
        background-color: white;
        &__header {
            display: flex;
            align-items: flex-end;
            padding: 1rem;
            flex: 0 0 40%;
            border-bottom: 1px solid grey;
            font-size: 4rem;
        }
        &__item {
            padding: 1.4rem;
            border-bottom: 1px solid grey;
        }
    }
    .backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.3);
    }

</style>