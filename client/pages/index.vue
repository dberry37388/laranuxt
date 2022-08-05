<template>
  <div v-if="!loading" class="container p-2 lg:p-8 flex flex-col">
    {{ resume.user.name }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Resume } from '@/types/api'

export default Vue.extend({
  data () {
    const loading = true
    const resume = {} as Resume

    return {
      loading,
      resume,
    }
  },
  mounted () {
    this.get()
  },
  methods: {
    async get (): Promise<void> {
      this.resume = (
        await this.$axios.get('resume/1')
      ).data.data as Resume

      this.loading = false
    },
  },
})
</script>
