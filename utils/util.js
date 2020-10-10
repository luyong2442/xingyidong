const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const URL = 'https://mc.chinanet100.net';
const IMGURL = 'http://123.23.169';
const APPID = "wx130d0494221a2239";
const SECRET = "233d41ce36309ed5959c6ec81d272c49";

module.exports = {
  formatTime: formatTime,
  URL: URL,
  IMGURL: IMGURL,
  APPID: APPID,
  SECRET: SECRET
}