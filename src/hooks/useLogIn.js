import { useNavigate } from 'react-router-dom'
import { loginWithGoogle as googleLogin } from '../auth/auth.js'

export function useLogIn() {
    const navigate = useNavigate()
    const loginWithGoogle = async() => {
        const { user } = await googleLogin()
        if (user) {
            navigate('/')
        }
    }


    return { loginWithGoogle }
}