import { createContext } from 'react'

function today() {
    return new Date().getDate();
}

export const Context = createContext({
    category: 'years',
    count: 1,
    dateState: {
        years: '1995',
        month: '06',
        days: '17'
    }
})
