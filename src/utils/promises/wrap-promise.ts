// https://blog.openreplay.com/data-fetching-with-suspense-in-react/
const wrapPromise = <T>(promise: () => Promise<T>) => {
	let status = 'pending'
	let result: T
	const suspend = promise().then(
		(res) => {
			status = 'success'
			result = res
		},
		(err) => {
			status = 'error'
			result = err
		}
	)
	return {
		read() {
			if (status === 'pending') {
				throw suspend
			} else if (status === 'error') {
				throw result
			} else if (status === 'success') {
				return result
			}
		},
	}
}


export default wrapPromise