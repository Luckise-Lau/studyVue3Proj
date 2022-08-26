import 'vue-router'

declare module 'vue-router' {
  // eslint-disable-next-line no-unused-vars
  interface RouteMeta {
    crumbName?: string,
    requiredAuth?: boolean
  }
}
