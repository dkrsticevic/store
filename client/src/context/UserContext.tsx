import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

type UserProviderProps = {
    children: ReactNode
}

type UserContext =  {
    getUser: () => string
    signup: (email: string, password: string) => any
}

const UserContext = createContext({} as UserContext);

export function useUser(){
    return useContext(UserContext)
}

export function UserProvider({children}: UserProviderProps ) {
    const [currentUser, setCurrentUser] = useState<any>()
    const [loading, setLoading] = useState(false)

    function getUser() {
        return currentUser
    }

    function signup(email :string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user != null){
                setLoading
                setCurrentUser(user)
            }
        })

        return unsubscribe
    }, [])

    return (
        <UserContext.Provider value={{getUser, signup}}>
            {!loading && children}
        </UserContext.Provider>
    )
}
