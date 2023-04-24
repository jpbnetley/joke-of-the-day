import { useEffect, useRef } from 'react'
import useSWR from 'swr'
import type { SWRConfiguration } from 'swr'

import swrFetcher, { GetDataProps } from 'utils/promises/swr-fetcher'

const useGetData = <T>(key:string, fetcher: ({signal}: GetDataProps) => Promise<T>, config?: SWRConfiguration) => {
	const abortRequest = useRef<AbortSignal | undefined>()
	
	useEffect(() => {
		const abort = new AbortController()
		abortRequest.current = abort?.signal

		return () => {
			abort.abort()
		}
	}, [])

	const promiseWrapper = () => swrFetcher(fetcher, abortRequest.current)
	const swrResult = useSWR(key, promiseWrapper, config)

	return swrResult
}

export default useGetData