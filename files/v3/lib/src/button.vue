<template>
  <button>{{ text }}</button>
</template>

<script setup lang="ts">
export interface Props {
  text?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: 'btn'
})
</script>
<script lang="ts">
export default {
  name: 'TButton'
}
</script>
