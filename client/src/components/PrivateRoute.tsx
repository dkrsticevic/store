import { Outlet, Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

function PrivateRoute() {
    
    const { getUser } = useUser()
    const user = getUser()

    return (
        user ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoute
