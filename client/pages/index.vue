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

<template>
  <div v-if="!loading" class="max-w-7xl mx-auto mt-10">
    <div class="grid gap-5 grid-cols-1 lg:grid-cols-3">
      <div class="space-y-5">
        <!-- Left Column -->
        <div class="shadow rounded-xl overflow-hidden">
          <div class="p-7 bg-white relative">
            <div class="text-lg font-semibold">
              {{ resume.name }}
            </div>

            <div class="text-sm text-gray-400">
              {{ resume.job_title }}
            </div>

            <div class="mt-5">
              <NuxtLink to="/update" class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                Update Resume
              </NuxtLink>
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

      <div class="space-y-5 col-span-2">
        <div class="shadow rounded-xl overflow-hidden">
          <div class="p-7 bg-white relative">
            <div class="text-lg font-semibold">
              About Me
            </div>

            <div class="text-sm text-gray-500">
              {{ resume.about_me }}
            </div>
          </div>
        </div>

        <div class="shadow rounded-xl overflow-hidden">
          <div class="p-7 bg-white relative">
            <div class="text-lg font-semibold">
              Experience
            </div>

            <div class="divide-y divide-gray-100">
              <div v-for="experience in resume.experiences" :key="experience.id" class="w-full py-4">
                <div class="flex items-center justify-between">
                  <div class="font-medium">{{ experience.job_title }}</div>

                  <div class="text-gray-700">
                    {{ experience.start_date }} - {{ experience.end_date }}
                  </div>
                </div>

                <p class="text-gray-500">
                  {{ experience.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
