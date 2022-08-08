<script lang="ts">
import Vue from 'vue'
import { PropType } from '@nuxtjs/composition-api'
import { Experience } from '@/types/api'
import Button from '@/components/forms/Button.vue'
import Label from '@/components/forms/Label.vue'
import InputError from '@/components/forms/InputError.vue'
import Input from '@/components/forms/Input.vue'
import SecondaryButton from '@/components/forms/SecondaryButton.vue'

export default Vue.extend({
  components: { SecondaryButton, Input, InputError, Label, Button },
  props: {
    experience: {
      type: Object as PropType<Experience>,
      required: true,
    },
    mode: {
      type: String,
      default: 'create',
    },
  },

  data () {
    return {
      processing: false,
      form: this.experience,
      errors: {},
    }
  },

  methods: {
    canceled () {
      this.$emit('canceled')
    },

    async updateExperience (): Promise<void> {
      this.processing = true
      this.errors = {}

      try {
        this.form = (
            await this.$axios.put('/resume/1/experiences/' + this.experience.id, this.form)
        ).data.data as Experience

        this.$toast.show({
          type: 'success',
          title: 'Updated',
          message: 'Successfully updated experience.',
        })

        this.processing = false
        this.$emit('updated', this.form)
      } catch (e:any) {
        this.$toast.show({
          type: 'danger',
          title: 'Error',
          message: 'Validation rules not passed',
        })
        this.errors = e.response.data.errors
      }
    },

    async createExperience (): Promise<void> {
      this.processing = true
      this.errors = {}

      try {
        this.form = (
            await this.$axios.post('/resume/1/experiences', this.form)
        ).data.data as Experience

        this.$toast.show({
          type: 'success',
          title: 'Created',
          message: 'Successfully created new experience.',
        })

        this.processing = false
        this.$emit('created')
      } catch (e:any) {
        this.$toast.show({
          type: 'danger',
          title: 'Error',
          message: 'Validation rules not passed',
        })
        this.errors = e.response.data.errors
      }
    },
  },
})
</script>

<template>
  <div>
    <div class="px-4 py-5 bg-white sm:p-6 shadow sm:rounded-tl-md sm:rounded-tr-md">
      <div class="space-y-3">
        <div class="col-span-6 sm:col-span-4">
          <Label for="job_title" value="Job Title" :required="true" />
          <Input
            id="job_title"
            v-model="form.job_title"
            autocomplete="job_title"
            class="mt-1 block w-full py-2 px-3"
            type="text"
          />

          <InputError v-if="errors.job_title" :message="errors.job_title[0]" />
        </div>

        <div class="col-span-6 sm:col-span-4">
          <Label for="description" value="Description" :required="true" />
          <Input
            id="description"
            v-model="form.description"
            autocomplete="description"
            class="mt-1 block w-full py-2 px-3"
            type="text"
          />

          <InputError v-if="errors.description" :message="errors.description[0]" />
        </div>

        <div class="col-span-6 sm:col-span-4">
          <div class="flex items-center justify-start gap-4">
            <div>
              <Label for="start_date" value="Start Date" :required="true" />
              <Input
                id="start_date"
                v-model="form.start_date"
                autocomplete="start_date"
                class="mt-1 block w-full py-2 px-3"
                type="text"
              />

              <InputError v-if="errors.start_date" :message="errors.start_date[0]" />
            </div>

            <div>
              <Label for="end_date" value="End Date" :required="true" />
              <Input
                id="end_date"
                v-model="form.end_date"
                autocomplete="end_date"
                class="mt-1 block w-full py-2 px-3"
                type="text"
              />

              <InputError v-if="errors.end_date" :message="errors.end_date[0]" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md">
      <SecondaryButton class="mr-2" type="button" @click.native="canceled">Cancel</SecondaryButton>
      <Button v-if="mode === 'edit'" class="mr-2" @click.native="updateExperience">Update</Button>
      <Button v-if="mode === 'create'" @click.native="createExperience">Create</Button>
    </div>
  </div>
</template>
