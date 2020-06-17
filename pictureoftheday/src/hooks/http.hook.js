import { useState, useCallback } from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const KEY = 'xIeznLFPQdDuFy7gi8fMReMNEtfpybAScst0phzb';


    const request = useCallback(
        async (url, abortController) => {
            setLoading(true);
            try {
                const response = await fetch(url, {
                    signal: abortController.signal
                })
                console.log(response, 'response')

                const data = await response.json();
                console.log(data, 'data')

                if (!response.ok) {
                    throw new Error(data.message || 'Somth went wrong')
                }
                setLoading(false);
                return data;
            } catch (error) {
                abortController.abort()
                setLoading(false)
                setError(error.message)
                console.log(error.message)
                throw error
            }
        }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, error, request, clearError }

}