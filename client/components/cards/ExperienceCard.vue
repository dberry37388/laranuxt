<script lang="ts">
import Vue from 'vue'
import { PropType } from '@nuxtjs/composition-api'
import { Experience } from '@/types/api'
import Button from '@/components/forms/Button.vue'
import DangerButton from '@/components/forms/DangerButton.vue'

export default Vue.extend({
  components: { DangerButton, Button },
  props: {
    experience: {
      type: Object as PropType<Experience>,
      required: true,
    },
  },

  data () {
    return {
      editing: false,
      processing: false,
      form: this.experience,
      errors: {},
    }
  },

  methods: {
    edit () {
      this.editing = true
    },

    canceled () {
      this.editing = false
    },

    updated (data: Experience) {
      this.form = data
      this.editing = false
    },

    deleteExperience () {
      this.$modal.show({
        type: 'danger',
        title: 'Are you sure?',
        body: 'Deleting the ' + this.experience.job_title + ' experience cannot be undone.',
        primary: {
          label: 'Confirm',
          theme: 'red',
          action: async () => {
            try {
              await this.$axios.delete('/resume/1/experiences/' + this.experience.id)

              this.$toast.show({
                type: 'success',
                title: 'Experience Deleted',
                message: 'Successfully deleted the ' + this.experience.job_title + ' experience.',
              })

              this.processing = false
              this.$emit('deleted')
            } catch (e:any) {
              this.$toast.show({
                type: 'danger',
                title: 'Error',
                message: 'An error occurred while attempting to delete this experience.',
              })
            }
          },
        },
        secondary: {
          label: 'Cancel',
          theme: 'white',
          action: () => null,
        },
      })
    },
  },
})
</script>

<template>
  <div>
    <div v-if="!editing" class="w-full py-4 px-4 py-5 bg-white sm:p-6 shadow">
      <div>
        <div class="flex items-center justify-between">
          <div class="font-medium">{{ form.job_title }}</div>

          <div class="text-gray-700">
            {{ form.start_date }} - {{ form.end_date }}
          </div>
        </div>

        <p class="text-gray-500">
          {{ form.description }}
        </p>

        <div class="flex items-center justify-end mt-4">
          <Button class="cursor-pointer px-2 py-1 text-xs mr-2" @click.native="edit">
            Edit
          </Button>

          <DangerButton class="cursor-pointer px-2 py-1 text-xs" @click.native="deleteExperience">
            Delete
          </DangerButton>
        </div>
      </div>
    </div>

    <div v-else>
      <ManageExperienceCard :experience="experience" mode="edit" @canceled="canceled" @updated="updated"/>
    </div>
  </div>
</template>
