import * as axios from 'axios'
const hostname = location.hostname
const host = hostname === 'localhost' ? `http://${hostname}:3000` : 'http://45.63.95.180:3000'
let options = {
  baseURL: host,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  // withCredentials: true
}
// The server-side needs a full url to works
if (process.server) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env
    .PORT || 3000}`
}
console.log(options)
export default axios.create(options)
