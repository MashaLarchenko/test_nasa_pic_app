import { useState, useCallback } from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const KEY = 'xIeznLFPQdDuFy7gi8fMReMNEtfpybAScst0phzb';
    // const context = useContext(Context);


    const request = useCallback(
        async (url, abortController) => {
            setLoading(true);
            try {
                const response = await fetch(url, {
                    signal: abortController.signal
                })
                console.log(response, 'response')

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
    const er = () => {
        console.log(error)
    }

    er()
    return { loading, error, request, clearError, setError }

}