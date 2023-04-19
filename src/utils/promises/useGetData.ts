import useSWR from 'swr'
import type { SWRConfiguration } from 'swr'

import swrFetcher from 'utils/promises/swr-fetcher'

const useGetData = <T>(key:string, fetcher: () => Promise<T>, config?: SWRConfiguration) => {
	const promiseWrapper = () => swrFetcher(fetcher)
	const swrResult = useSWR(key, promiseWrapper, config)

	return swrResult
}

export default useGetData