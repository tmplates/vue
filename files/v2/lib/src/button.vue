<template>
  <button>{{ text }}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ButtonComponent extends Vue {
  @Prop(String) text: string | undefined
}
</script>
