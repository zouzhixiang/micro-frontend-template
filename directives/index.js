import permission from './permission'

const registerDirectives = Vue => {
  Vue.directive('permission', permission)
}

export default registerDirectives
