// file vue.d.ts
import { QVueGlobals } from 'quasar'

declare module 'vue/types/vue' {
  interface Vue {
    $q: QVueGlobals
  }
}
