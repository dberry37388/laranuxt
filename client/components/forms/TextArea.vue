<script type="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    modelValue: String,
  },
  emits: ['updateModeValue'],
})
</script>

<template>
  <textarea
    ref="input"
    class="border border-gray-300 outline-none rounded-md shadow-sm"
    :value="modelValue"
    @input="$emit('input', $event.target.value)"
  ></textarea>
</template>
