<template>
  <div class="page-body">
    <Title>Goals</Title>
    <div class="main-card">
      <span class="goal">12 / 40 km</span>
      <span class="goal">5 / 8 gerend</span>
    </div>
    <SubTitle>Jouw sprint</SubTitle>
    <div class="overview">
      <div class="card">
        <span class="day">Ma</span>
        <span class="day">Di</span>
        <span class="day">Wo</span>
        <span class="day">Do</span>
        <span class="day">Vr</span>
        <span class="day">Za</span>
        <span class="day">Zo</span>
      </div>
      <div class="card">
        <span class="day">Ma</span>
        <span class="day">Di</span>
        <span class="day">Wo</span>
        <span class="day">Do</span>
        <span class="day">Vr</span>
        <span class="day">Za</span>
        <span class="day">Zo</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
    import Title from "../components/Title.vue"
    import SubTitle from "../components/SubTitle.vue"
    export default {
        components: {
            Title,
            SubTitle,
        }
    }
</script>
<style lang="scss" scoped>
  @import "../styles/vars";
  .page-body {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .main-card {
    display: flex;
    flex-direction: column;
    flex: 0 0 30%;
    background: url("./sprint-card-bg.svg") no-repeat;
    background-size: cover;
    border-radius: 16px;
    justify-content: center;
    padding: $card-padding;
    color: white;
    font-weight: 700;
    text-decoration: none;
    font-size: 2rem;
    margin-top: 2rem;
    box-shadow: 3px 6px 12px 6px rgba(0, 0, 0, 0.25);
  }
  h3{
    margin-top: 2rem;
  }

  .goal {
    display: block;
  }

  .overview {
    margin-top: 1rem;
  }
  .card{
    display: flex;
    align-items: center;
    padding: 0;
    overflow: hidden;
    + .card {
      margin-top: .5rem;
    }
  }
  .day {
    display: block;
    padding: 1rem 0;
    width: (100%/7);
    text-align: center;
    &--active {
      background-color: orange;
    }
  }
</style>