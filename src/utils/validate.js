/**
 * @param {校验的字符串} str 
 * @param {校验类型 'phone' 'password'} type 
 * @Auth zhangwei
 * @date 20181029
 */
export const validate = (str, type) => {
  let isMatch = false,
    isNum = /^[0-9]+.?[0-9]*$/,   // 数字
    isMobile = /^1[3578]\d{9}$|^147\d{8}$/,   // 手机号
    ispass = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;  // 6-20位字符；数字、字母、特殊字符（除空格），起码其中两种组合

  switch(type) {
    case 'phone':
      if(isMobile.test(str)) {
        isMatch = true;
      }
      break;
    case 'password':
      if(ispass.test(str)) {
        isMatch = true;
      }
      break;
    case 'number':
      if(isNum.test(str)) {
        isMatch = true;
      }
    break;
  }

  return isMatch;
}

/**
 * Created by jiachenpan on 16/11/18.
 */

export function isvalidUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/* 合法手机号*/
export function validatePhone(str) {
  const reg = /^1[3578]\d{9}$|^147\d{8}$/
  return reg.test(str)
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}
