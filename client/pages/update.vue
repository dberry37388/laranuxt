<script lang="ts">
import Vue from 'vue'
import BasicInformation from '@/components/partials/BasicInformation.vue'

export default Vue.extend({
  components: { BasicInformation },
})
</script>

<template>
  <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
    <BasicInformation />
  </div>
</template>
