import { createContext } from 'react'

function today() {
    return new Date().getDate();
}

export const Context = createContext({
    category: 'years',
    count: 1
})
