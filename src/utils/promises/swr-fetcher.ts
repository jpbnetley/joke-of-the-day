import toast from 'react-hot-toast'

const swrFetcher = async <T>(getData: () => Promise<T>) => {

	const fetchingPromise = getData()

	toast.promise(fetchingPromise, {
		loading: 'Getting jokes',
		success: 'Got the Jokes',
		error: 'Could not load jokes',
	})

	return fetchingPromise

}

export default swrFetcher