<script lang="ts">
import Vue from 'vue'
import FormSection from '@/components/forms/FormSection.vue'
import Label from '@/components/forms/Label.vue'
import Input from '@/components/forms/Input.vue'
import { Resume } from '@/types/api'
import InputError from '@/components/forms/InputError.vue'
import Button from '@/components/forms/Button.vue'
import TextArea from '@/components/forms/TextArea.vue'

export default Vue.extend({
  components: { TextArea, InputError, Input, Label, FormSection, Button },

  data () {
    const loading = true
    const processing = false
    const form = {} as Resume
    const errors:any = {}

    return {
      loading,
      processing,
      form,
      errors,
    }
  },

  mounted () {
    this.get()
  },

  methods: {
    async get (): Promise<void> {
      this.form = (
          await this.$axios.get('resume/1')
      ).data.data as Resume

      this.loading = false
    },

    async updateBasicInformation (): Promise<void> {
      this.processing = true
      this.errors = {}

      try {
        this.form = (
            await this.$axios.put('/resume/1', this.form)
        ).data.data as Resume

        this.$toast.show({
          type: 'success',
          title: 'Created',
          message: 'Successfully updated basic information.',
        })

        this.processing = false
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
    <FormSection v-if="!loading" @submitted="updateBasicInformation">
      <template #title>
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
          Contact Information
        </h2>
      </template>

      <template #description>
        Update your resume's contact information and basic details.
      </template>

      <template #form>
        <div class="col-span-6 sm:col-span-4">
          <Label for="name" value="Name" :required="true" />
          <Input
            id="name"
            v-model="form.name"
            autocomplete="name"
            class="mt-1 block w-full py-2 px-3"
            type="text"
          />

          <InputError v-if="errors.name" :message="errors.name[0]" />
        </div>

        <div class="col-span-6 sm:col-span-4">
          <Label for="about_me" value="About Me" />
          <TextArea
            id="about_me"
            v-model="form.about_me"
            autocomplete="about_me"
            class="mt-1 block w-full py-2 px-3"
            type="text"
          />

          <InputError v-if="errors.name" :message="errors.about_me[0]" />
        </div>

        <div class="col-span-6 sm:col-span-4">
          <Label for="location" value="Location" :required="true" />
          <Input
            id="name"
            v-model="form.location"
            autocomplete="location"
            class="mt-1 block w-full py-2 px-3"
            type="text"
          />

          <InputError v-if="errors.location" :message="errors.location[0]" />
        </div>

        <div class="col-span-6 sm:col-span-4">
          <Label for="job_title" value="Job Title" :required="true" />
          <Input
            id="name"
            v-model="form.job_title"
            autocomplete="job_title"
            class="mt-1 block w-full py-2 px-3"
            type="text"
          />

          <InputError v-if="errors.job_title" :message="errors.job_title[0]" />
        </div>

        <div class="col-span-6 sm:col-span-4">
          <Label for="email" value="Email" :required="true" />
          <Input
            id="name"
            v-model="form.email"
            autocomplete="email"
            class="mt-1 block w-full py-2 px-3"
            type="email"
          />

          <InputError v-if="errors.email" :message="errors.email[0]" />
        </div>

        <div class="col-span-6 sm:col-span-4">
          <Label for="phone" value="Phone" :required="true" />
          <Input
            id="name"
            v-model="form.phone"
            autocomplete="phone"
            class="mt-1 block w-full py-2 px-3"
            type="text"
          />

          <InputError v-if="errors.phone" :message="errors.phone[0]" />
        </div>

        <div class="col-span-6 sm:col-span-4">
          <Label for="portfolio_url" value="Portfolio URL" />
          <Input
            id="name"
            v-model="form.portfolio_url"
            autocomplete="portfolio_url"
            class="mt-1 block w-full py-2 px-3"
            type="text"
          />

          <InputError v-if="errors.portfolio_url" :message="errors.portfolio_url[0]" />
        </div>
      </template>

      <template #actions>
        <Button type="submit" :disabled="processing">
          Save
        </Button>
      </template>
    </FormSection>
  </div>
</template>
