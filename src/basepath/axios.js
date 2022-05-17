// src/boot/axios.js

import { boot } from 'quasar/wrappers'
import axios from 'axios'

const api = axios.create({ baseURL: 'http://101.255.165.82:8023/api' })

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  
  app.config.globalProperties.$api = api
})

export { axios, api }
