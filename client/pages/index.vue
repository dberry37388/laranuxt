<template>
  <div v-if="!loading" class="container">
    <div class="grid gap-5 lg:grid-cols-3">
      <div class="space-y-5">
        <!-- Left Column -->
        <div class="shadow rounded-xl overflow-hidden">
          <div class="pt-14 p-7 bg-white relative">
            <div class="text-lg font-semibold">
              {{ resume.name }}
            </div>

            <div class="text-sm text-gray-400">
              {{ resume.job_title }}
            </div>
          </div>
        </div>

        <div class="shadow rounded-xl overflow-hidden">
          <div class="p-7 bg-white relative">
            <div class="text-lg font-semibold mb-5">
              Contact Information
            </div>

            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="text-sm text-gray-600">
                  Location
                </div>

                <div class="text-sm text-gray-400">
                  {{ resume.location }}
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="text-sm text-gray-600">
                  Email
                </div>

                <div class="text-sm text-gray-400">
                  {{ resume.email }}
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="text-sm text-gray-600">
                  Phone
                </div>

                <div class="text-sm text-gray-400">
                  {{ resume.phone }}
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="text-sm text-gray-600">
                  Portfolio URL
                </div>

                <div class="text-sm text-gray-400">
                  <a :href="resume.portfolio_url" target="_blank">View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
