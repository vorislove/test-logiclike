import { type AxiosRequestConfig } from 'axios'

import { api } from '../axios'

export class BaseService {
  public static async fetch<T>(config: AxiosRequestConfig) {
    const { data } = await api.request<T>(config)

    return data
  }
}
