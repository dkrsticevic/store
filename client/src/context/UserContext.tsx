import React, { ReactNode, createContext, useContext, useState } from 'react'

type UserProviderProps = {
    children: ReactNode
}

type UserContext =  {}

const UserContext = createContext({} as UserContext);

export function useUser(){
    return useContext(UserContext)
}

export function UserProvider({children}: UserProviderProps ) {
    const [currentUser, setCurrentUser] = useState<string>()

    const value = {
        currentUser
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
