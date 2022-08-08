<script lang="ts">
import Vue from 'vue'
import { PropType } from '@nuxtjs/composition-api'
import { Experience } from '@/types/api'
import InputError from '@/components/forms/InputError.vue'
import Label from '@/components/forms/Label.vue'
import Input from '@/components/forms/Input.vue'
import TextArea from '@/components/forms/TextArea.vue'
import Button from '@/components/forms/Button.vue'

export default Vue.extend({
  components: { Button, TextArea, Input, Label, InputError },
  props: {
    experience: {
      type: Object as PropType<Experience>,
      required: true,
    },
  },

  data () {
    return {
      editing: false,
      form: this.experience,
      errors: {},
    }
  },
})
</script>

<template>
  <div class="w-full py-4 px-4 py-5 bg-white sm:p-6 shadow">
    <div v-if="!editing">
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

    <div v-else>
      <div class="space-y-3">
        <div class="col-span-6 sm:col-span-4">
          <Label for="name" value="Name" :required="true" />
          <Input
            id="name"
            v-model="form.job_title"
            autocomplete="name"
            class="mt-1 block w-full py-2 px-3"
            type="text"
          />

          <InputError v-if="errors.name" :message="errors.name[0]" />
        </div>

        <div class="col-span-6 sm:col-span-4">
          <Label for="description" value="Description" :required="true" />
          <Input
            id="name"
            v-model="form.description"
            autocomplete="name"
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

        <div class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md">
          <Button>Cancel</Button>
        </div>
      </div>
    </div>
  </div>
</template>
