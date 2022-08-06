<script type="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    message: String,
  },
})
</script>

<template>
  <div v-show="message">
    <p class="text-sm text-red-600">
      {{ message }}
    </p>
  </div>
</template>
