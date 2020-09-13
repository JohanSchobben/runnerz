<template>
  <div class="card">
    <slot/>
  </div>
</template>
<style lang="scss" scoped>
  @import "../styles/vars";

  .card {
    color: white;
    background-color: $dark;
    padding: $card-padding;
    border-radius: $card-border-radius;
  }
</style>