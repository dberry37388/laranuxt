<script lang="ts">
import Vue from 'vue'
import Section from '@/components/Section.vue'
import { Experiences } from '@/types/api'
import ManageExperienceCard from '@/components/cards/ManageExperienceCard.vue'
import Button from '@/components/forms/Button.vue'

export default Vue.extend({
  components: { Button, ManageExperienceCard, Section },

  data () {
    return {
      experiences: {} as Experiences,
      loading: false,
      addExperience: false,
    }
  },

  mounted () {
    this.get()
  },

  methods: {
    async get (): Promise<void> {
      this.loading = true
      this.experiences = (
          await this.$axios.get('resume/1/experiences')
      ).data.data as Experiences

      this.loading = false
      this.addExperience = false
    },

    cancel () {
      this.addExperience = false
    },

    created () {
      this.get()
      this.addExperience = false
    },

    deleted () {
      this.get()
      this.addExperience = false
    },
  },
})

</script>

<template>
  <div>
    <Section v-if="!loading">
      <template #title>
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
          Experiences
        </h2>
      </template>

      <template #description>
        Manage your work history
      </template>

      <template #content>
        <div class="mb-4">
          <div v-if="!addExperience" class="flex justify-end">
            <Button @click.native="addExperience = true">Add New Experience</Button>
          </div>

          <div v-if="addExperience">
            <ManageExperienceCard
              :experience="{}"
              @canceled="cancel"
              @created="created"
            />
          </div>
        </div>
        <div v-if="experiences.length" class="space-y-2 divide-y divide-gray-100">
          <ExperienceCard v-for="experience in experiences" :key="experience.id" :experience="experience" @updated="get" @deleted="deleted" />
        </div>

        <div v-if="experiences.length < 1 && !addExperience">
          <button type="button" class="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="addExperience = true">
            <svg
              class="mx-auto h-12 w-12 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
            </svg>
            <span class="mt-2 block text-sm font-medium text-gray-900">Create a new experience </span>
          </button>
        </div>
      </template>
    </Section>
  </div>
</template>
