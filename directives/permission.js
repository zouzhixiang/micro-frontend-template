import store from '@/store'
import { isString } from '../libs/tools'

const checkPermission = (el, binding) => {
  const { value } = binding
  const authCodes = store.state.permissionCodes
  if (value && isString(value) && !authCodes.includes(value)) {
    el.parentNode && el.parentNode.removeChild(el)
  }
}

export default {
  inserted (el, binding) {
    checkPermission(el, binding)
  },
  update (el, binding) {
    checkPermission(el, binding)
  }
}
