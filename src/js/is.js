/**
 *
 * @param {*} a
 * @return {boolean}
 * @function
 * @export
 */
export const isUndefined = a => typeof a === 'undefined'
/**
 *
 * @param {*} a
 * @return {boolean}
 * @function
 * @export
 */
export const isNull = a => !a && typeof a === 'object'
/**
 *
 * @param {*} a
 * @return {boolean}
 * @function
 * @export
 */
export const isString = a => typeof a === 'string'
/**
 *
 * @param {*} a
 * @return {boolean}
 * @function
 * @export
 */
export const isBoolean = a => typeof a === 'boolean'
/**
 *
 * @param {*} a
 * @return {boolean}
 * @function
 * @export
 */
export const isNumber = a => typeof a === 'number' && !Number.isNaN(a)

/**
 *
 * @param {*} a
 * @return {boolean}
 * @function
 * @export
 */
export const isInteger = a => isNumber(a) && Number.isInteger(a) && a === +a && a === (a | 0)

/**
 *
 * @param {*} a
 * @return {boolean}
 * @function
 * @export
 */
export const isFloat = a => isNumber(a) && !Number.isInteger(a) && a === +a && a !== (a | 0)
/**
 *
 * @param {*} a
 * @return {boolean}
 * @function
 */
export const isObject = a => a !== null && typeof a === 'object' && !isArray(a) && !isRegex(a)

/**
 *
 * @param {*} a
 * @return {boolean}
 * @function
 */
export const isStrictObject = a => isObject(a) && a.constructor.name === 'Object'
/**
 *
 * @param {*} a
 * @return {boolean}
 * @function
 * @export
 */
export const isFunction = a => typeof a === 'function' && !isClass(a)
/**
 *
 * @param {*} a
 * @return {boolean}
 * @function
 * @export
 */
export const isNode = a => isObject(a) && isNumber(a.nodeType)
/**
 *
 * @param {*} a
 * @return {boolean}
 * @function
 * @export
 */
export const isNodeText = a => isObject(a) && (a.nodeType === 3)
/**
 *
 * @param {*} a
 * @return {boolean}
 * @function
 * @export
 */
export const isPrimitive = a => {
  switch (typeof a) {
    case 'boolean':
    case 'string':
    case 'symbol':
      return true
    case 'number':
      return isNumber(a)
    default:
      return false
  }
}
/**
 *
 * @param {*} a
 * @return {boolean}
 * @function
 * @export
 */
export const isIterable = a => (a == null) ? false : typeof a[Symbol.iterator] === 'function'

/**
 *
 * @param {*} a
 * @return {boolean}
 * @function
 * @export
 */
export const isSymbol = a => typeof a === 'symbol'

/**
 *
 * @param {*} a
 * @return {boolean}
 * @function
 * @export
 */
export const isArray = a => Array.isArray(a) || a instanceof Array

/**
 *
 * @param {*} a
 * @return {boolean}
 * @function
 * @export
 */
export const isStrictArray = a => isArray(a) && a.constructor.name === 'Array'

/**
 *
 * @param {*} a
 * @return {boolean}
 * @function
 * @export
 */
export const isRegex = a => a !== null && typeof a === 'object' && !isArray(a) && !isNull(a) && a instanceof RegExp
/**
 *
 * @param {*} a
 * @function
 * @return {boolean}
 * @export
 */
export const isClass = a => typeof a === 'function' && /^class\s/.test(Function.prototype.toString.call(a))
