import { useState, useCallback } from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const request = useCallback(
        async (url, abortController) => {
            setLoading(true);
            try {
                const response = await fetch(url, {
                    signal: abortController.signal
                })
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.message || 'Somth went wrong')
                }
                setLoading(false);
                return data;
            } catch (error) {
                abortController.abort()
                setLoading(false)
                setError(error.message)
                throw error
            }
        }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, error, request, clearError, setError }

}