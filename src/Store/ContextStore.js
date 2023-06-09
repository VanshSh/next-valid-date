import { useContext, createContext, useState } from 'react'

const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [state, setState] = useState({
        sameDayDelivery: {
            enable: false,
            cutOffTime: '',
        },
        last_n_days_disable: 2,
        invalidDays: [],
        invalidMonths: [],
        invalidDates: [],
    })
    return (
        <Context.Provider value={{ setState, state }}>
            {children}
        </Context.Provider>
    )
}

function GlobalContextUse() {
    return useContext(Context)
}
export default GlobalContextUse
