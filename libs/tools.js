/**
 * @description 是否是字符串
 * @param { string } str
 * @returns { Boolean }
 */
export const isString = str => {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @description 是否是对象
 * @param { Object } arg
 * @returns { Boolean }
 */
export const isObject = arg => {
  return Object.prototype.toString.call(arg) === '[object Object]'
}

/**
 * @description 是否是函数
 * @param { Function } arg
 * @returns { Boolean }
 */
export const isFunction = arg => {
  return Object.prototype.toString.call(arg) === '[object Function]'
}

/**
 * @description 是否是数组
 * @param { Array } arg
 * @returns { Boolean }
 */
export const isArray = arg => {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * @description 是否是数值
 * @param { Number | String } arg
 * @param { Boolean } isPure 是否纯数字
 * @returns { Boolean }
 */
export const isNumber = (arg, isPure) => {
  if (isPure) {
    return typeof arg === 'number'
  } else {
    const reg = /^[+-]?[0-9]+(\.[0-9]*)?$/
    return typeof arg === 'number' || reg.test(arg)
  }
}

/**
 * @description 是否是数字(支持小数)
 * @param { Number | String } Number
 * @returns { Boolean }
 */
export const isNumeric = (number) => {
  return /^\d+(\.\d+)?$/.test(number)
}

/**
 * @description 是否是非负整数
 * @param { Number | String } number
 * @returns { Boolean }
 */
export const isPositiveIntegerOrZero = (number) => {
  return /^\d+$/.test(number)
}

/**
 * @description 是否是正整数
 * @param { Number | String } number
 * @returns { Boolean }
 */
export const isPositiveInteger = (number) => {
  return /^[1-9]\d*$/.test(number)
}

/**
 * @description 是否是北纬
 * @param { String } arg
 * @returns { Boolean }
 */
export const isNorthLat = arg => {
  // const lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/
  const lat = /^\(?[+]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/
  return lat.test(arg)
}

/**
 * @description 是否是东经
 * @param { String } arg
 * @returns { Boolean }
 */
export const isEastLong = arg => {
  // const long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/
  const long = /^\s?[+]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/
  return long.test(arg)
}

/**
 * @description 是否是手机号码
 * @param { Number | String } arg
 * @returns { Boolean }
 */
export const isMobile = arg => {
  const mobile = /^((\+|00)86)?1([3568][0-9]|4[579]|6[67]|7[01235678]|9[012356789])[0-9]{8}$/
  const Landline = /^(\d{3,4}-)?[0-9]{7,8}$/
  return mobile.test(arg) || Landline.test(arg)
}

/**
 * @description 单数组去重
 * @param { array } arr
 * @returns { array }
 */
export const uniqueArray = arr => {
  return Array.from(new Set(arr))
}

/**
 * @description 双数组求交集
 * @param { array } a, b
 * @returns { array }
 */
export const intersection = (a, b) => {
  return a.filter(v => b.includes(v))
}

/**
 * @description 双数组求差集
 * @param { array } a, b
 * @returns { array }
 */
export const difference = (a, b) => {
  return a.concat(b).filter(v => !a.includes(v) || !b.includes(v))
}

/**
 * @description hex格式颜色转换rgba格式
 * @param { String } hex
 * @param { Number } opacity
 * @returns { String }
 */
export const transferHexToRgba = (hex, opacity = 1) => {
  hex = hex.startsWith('#') ? hex.replace('#', '') : hex
  const red = parseInt(hex.slice(0, 2), 16)
  const green = parseInt(hex.slice(2, 4), 16)
  const blue = parseInt(hex.slice(4, 6), 16)
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`
}

/**
 * @description 绑定事件 on(element, event, handler)
 */
export const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * @description 解绑事件 off(element, event, handler)
 */
export const off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * 判断元素是否包含某个class
 * @param { HTMLElement } ele
 * @param { string } cls
 * @returns { boolean }
 */
export const hasClass = (ele, cls) => {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * 向元素中添加class
 * @param { HTMLElement } ele
 * @param { string } cls
 */
export const addClass = (ele, cls) => {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/**
 * 移除元素中的class
 * @param { HTMLElement } ele
 * @param { string } cls
 */
export const removeClass = (ele, cls) => {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, '')
  }
}