import { useEffect, useRef, useCallback } from 'react'

const useIsMounted = (): (() => boolean) => {
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  // Return a function to safely access the ref value
  return useCallback(() => isMounted.current, [])
}

export default useIsMounted
