<template>
  <div class="page-body">
    <Title>Overview</Title>
    <router-link to="/go" class="main-card">
      start een nieuwe training
    </router-link>
    <SubTitle>Jouw training</SubTitle>
    <div class="facts">
      <Card>
        Je hebt deze week 12 kilometer gelopen
      </Card>
      <Card>
        Hello world
      </Card>
    </div>
  </div>
</template>
<script lang="ts">
    import Title from "../components/Title.vue"
    import SubTitle from "../components/SubTitle.vue"
    import Card from "../components/Card.vue"
    export default {
        components: {
            Title,
            SubTitle,
            Card
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
    flex: 0 0 30%;
    background: url("./overview-card-bg.svg") no-repeat;
    background-size: cover;
    border-radius: 16px;
    align-items: center;
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
  .facts {
    margin-top: 1rem;
  }
  .card:not(:first-child) {
    margin-top: .6rem;
  }
</style>