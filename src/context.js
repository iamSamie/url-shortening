import { createContext, useState } from 'react'

export const Context = createContext()

export const ContextFunction = ({ children }) => {
    const [val, setVal] = useState('')
    const [res, setRes] = useState([])
    const [showMenu, setShowMenu] = useState(false)

    return (
        <Context.Provider value={{ val, setVal, res, setRes, showMenu, setShowMenu }}>
            {children}
        </Context.Provider>
    )
}
