<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    type: {
      type: String,
      default: 'submit',
    },
  },
})
</script>

<template>
  <button :type="type" class="inline-flex items-center px-4 py-2 bg-red-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-900 focus:outline-none focus:border-red-900 focus:ring focus:ring-red-300 disabled:opacity-25 transition">
    <slot />
  </button>
</template>
