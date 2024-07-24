import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import './dashboardLayout.css'
import { useAuth } from '@clerk/clerk-react'

const DashboardLayout = () => {

    const { userId, isLoaded } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoaded && !userId) {
            navigate('/sign-in')
        }
    }, [userId, isLoaded, navigate])

    if (!isLoaded) return "LOADING..."

    return (
        <div className='dashboardLayout'>
            <div className='menu'>MENU</div>
            <div className='content'><Outlet /></div>
        </div>
    )
}

export default DashboardLayout