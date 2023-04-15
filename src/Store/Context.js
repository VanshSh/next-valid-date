import { useContext, createContext, useState } from 'react'

const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [state, setState] = useState({
        sameDayDelivery: 'VANSH',
    })
    return (
        <Context.Provider value={{ setState, state }}>
            {children}
        </Context.Provider>
    )
}

export const UseGlobalContext = () => useContext(Context)
