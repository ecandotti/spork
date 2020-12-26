import { createContext, useContext } from 'react'

export const HomeContext = createContext()

export function useHome() {
    return useContext(HomeContext)
}