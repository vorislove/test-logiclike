import { useState, useEffect } from 'react'

type QueryFunction<T> = () => Promise<T>

interface QueryOptions {
  enabled?: boolean
}

interface QueryResponse<T> {
  data: T | undefined
  status: 'idle' | 'loading' | 'success' | 'error'
  isLoading: boolean
  error: Error | null
}

export const useQuery = <T>(
  queryFn: QueryFunction<T>,
  options: QueryOptions = {},
): QueryResponse<T> => {
  const [data, setData] = useState<T | undefined>()
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (options.enabled) return
    const fetchData = async () => {
      setIsLoading(true)
      setStatus('loading')
      try {
        const result = await queryFn()
        setData(result)
        setStatus('success')
        setIsLoading(false)
      } catch (error) {
        setError(error as Error)
        setStatus('error')
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return { data, status, error, isLoading }
}

export default useQuery
