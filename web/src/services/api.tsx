import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rejane-server.herokuapp.com',
})