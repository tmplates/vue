<style scoped lang="scss">
.section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    font-weight: 200;
  }
}
</style>

<template>
  <div class="section">
    <h1 @click="buttonClick">Hello World</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class HomePage extends Vue {
  buttonClick() {
    alert('oops.')
  }
}
</script>
