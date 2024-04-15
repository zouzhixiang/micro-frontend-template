/**
 * @description 获取字符串的哈希值
 * @param { String } str
 * @param { Boolean } caseSensitive
 */
export const getHashCode = (str, caseSensitive) => {
  if (!caseSensitive) {
    str = str.toLowerCase()
  }
  var hash = 1315423911
  var i
  var ch
  for (i = str.length - 1; i >= 0; i--) {
    ch = str.charCodeAt(i)
    hash ^= ((hash << 5) + ch + (hash >> 2))
  }
  return (hash & 0x7FFFFFFF)
}