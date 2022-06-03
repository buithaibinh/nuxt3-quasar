declare module '#app' {
  interface NuxtApp {
    $hello(msg: string): string
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $hello(msg: string): string
  }
}

export {}
