export default {
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  getItem(key) {
    return JSON.parse(localStorage.getItem(key))
  },
  removeItem(key) {
    localStorage.removeItem(key)
  },
  //sessionStorage
  setItem_s(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  },
  getItem_s(key) {
    return JSON.parse(sessionStorage.getItem(key))
  },
  removeItem_s(key) {
    sessionStorage.removeItem(key)
  }
}
