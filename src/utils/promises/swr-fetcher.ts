import toast from 'react-hot-toast'

export type GetDataProps = {
	signal?:AbortSignal
}

const swrFetcher = async <T>(getData: ({signal}: GetDataProps) => Promise<T>, signal?: AbortSignal) => {

	const fetchingPromise = getData({signal})

	toast.promise(fetchingPromise, {
		loading: 'Getting jokes',
		success: 'Got the Jokes',
		error: 'Could not load jokes',
	})

	return fetchingPromise

}

export default swrFetcher