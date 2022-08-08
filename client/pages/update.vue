<script lang="ts">
import Vue from 'vue'
import BasicInformation from '@/components/partials/BasicInformation.vue'
import ManageExperiences from '@/components/partials/ManageExperiences.vue'

export default Vue.extend({
  components: { ManageExperiences, BasicInformation },
})
</script>

<template>
  <div class="max-w-7xl mx-auto py-10 px-5 sm:px-6 lg:px-8">
    <BasicInformation />

    <SectionBorder />

    <ManageExperiences />
  </div>
</template>
