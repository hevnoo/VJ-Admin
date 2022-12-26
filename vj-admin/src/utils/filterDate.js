// 报错，中国标准时间转换时间戳
export function changeTime(ms) {
  //2020-06-01T04:24:43.230Z
  // 把时间的中的T和Z 替换成空字符串
  let date = ms.replace('T', ' ')
  let data = date.replace('Z', '')
  // 声明一个变量赋值给：日期时间字符串，并返回 1970/1/1 午夜距离该日期时间的毫秒数
  let datime = Date.parse(data)
  let time = new Date()
  let msi = time.getTime()

  let cha = msi - datime
  // 以下是获取时，分，秒，
  let months = cha / 1000 / 60 / 60 / 24 / 30
  let weeks = cha / 1000 / 60 / 60 / 24 / 7
  let days = cha / 1000 / 60 / 60 / 24
  let hours = cha / 1000 / 60 / 60
  let minutes = cha / 1000 / 60
  // 一下是声明一个字符串，然后判断月，周，天，时，分
  let str = ''
  if (months >= 1) {
    str = `${parseInt(months)} 月前`
  } else if (weeks >= 1) {
    str = `${parseInt(weeks)} 周前`
  } else if (days >= 1) {
    str = `${parseInt(days)} 天前`
  } else if (hours >= 1) {
    str = `${parseInt(hours)} 小时前`
  } else if (minutes >= 1) {
    str = `${parseInt(minutes)} 分钟前`
  } else {
    str = '刚刚'
  }
  //这里时返回str
  return str
  // console.log(datime)
}
// export { changeTime }
