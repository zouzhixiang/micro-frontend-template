import { isNumber } from '../libs/tools'

/**
 * @description 数据格式化
 * @param { String | Number } value
 * @param { Number } accuracy    需要保留的小数位
 * @returns { String | Number }
 */
export const valueFormatter = (value, accuracy = 2) => {
  return isNumber(value) ? Number(value).toLocaleString('en-US', { minimumFractionDigits: accuracy, maximumFractionDigits: accuracy, useGrouping: false }) : (value ?? '--')
}
