<script type="ts">

import Vue from 'vue'

export default Vue.extend({
  props: {
    value: String,
    required: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<template>
  <label class="block font-medium text-sm text-gray-700">
    <span v-if="value">{{ value }}</span>
    <span v-else><slot /></span>
    <span v-if="required" class="text-red-500"> * </span>
  </label>
</template>
