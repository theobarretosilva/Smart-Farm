import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { axiosInstance } from '../lib/axios'

export const useCheckIfLoggedIn = () => {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    const token = localStorage.getItem('SmartFarmToken')
    const isLoginPage = location.pathname === '/login'

    if (token && isLoginPage) {
      navigate('/')
    }

    if (!token) {
      navigate('/login')
    }

    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`
  }, [location.pathname, navigate])
}
