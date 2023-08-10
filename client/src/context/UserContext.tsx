import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, User, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase'


type UserProviderProps = {
    children: ReactNode
}

type UserContext =  {
    getUser: () => string
    signup: (email: string, password: string) => any
    login: (email: string, password: string) => any
    logout: () => any
}

const UserContext = createContext({} as UserContext);

export function useUser(){
    return useContext(UserContext)
}

export function UserProvider({children}: UserProviderProps ) {
    const [currentUser, setCurrentUser] = useState<User>()
    const [loading, setLoading] = useState(false)

    function getUser() {
        if ( currentUser?.email == null){
            return ""
        }
        return currentUser.email
    }

    function signup(email :string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email :string, password: string) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        setCurrentUser(undefined)
        return signOut(auth)
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
        <UserContext.Provider value={{getUser, signup, login, logout}}>
            {!loading && children}
        </UserContext.Provider>
    )
}
