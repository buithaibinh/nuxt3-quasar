<template>
  <div class="q-pa-md">
    <q-btn color="primary" icon="check" label="Alert" @click="alert" />
  </div>
</template>

<script lang="ts">
import { useQuasar } from 'quasar'
export default {
  setup() {
    return {}
  },
  methods: {
    alert() {
      this.$q
        .dialog({
          title: 'Alert',
          message: 'Some message',
        })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        })
      console.log('alert')
    },
  },
}
</script>

<style scoped></style>
