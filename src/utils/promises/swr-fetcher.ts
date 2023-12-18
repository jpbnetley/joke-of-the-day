import toast from 'react-hot-toast'

// eslint-disable-next-line no-unused-vars
export type GetDataProps<T> = 	(data: { signal?:AbortSignal }) => Promise<T>

const swrFetcher = async <T>(getData: GetDataProps<T>, signal?: AbortSignal) => {
  const fetchingPromise = getData({ signal })

  toast.promise(fetchingPromise, {
    loading: 'Getting jokes',
    success: 'Got the Jokes',
    error: 'Could not load jokes'
  })

  return fetchingPromise
}

export default swrFetcher
