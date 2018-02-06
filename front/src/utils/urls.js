
const hostname = location.hostname
const host = hostname === 'localhost' ? `${hostname}:3000` : '45.63.95.180:3000'

export const question = `${host}/question`
