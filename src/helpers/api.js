import axios from 'axios'

export const $http = axios.create({
  baseURL: 'https://conduit.productionready.io/api',
  timeout: 5000
})

export async function $get (path) {
  const { data } = await $http.get(path)

  return data
}

export async function getTags () {
  const { tags } = await $get('/tags')

  return tags
}

export async function getArticles () {
  const data = await $get('/tags')

  return data
}
