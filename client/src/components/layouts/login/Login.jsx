//dependencies
import React, { useContext, useState } from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import Cookies from 'js-cookie'
// keys
import { AUTH_COOKIE } from '../../../config/keys'
// api 
import { generalPostRequest } from '../../../functions/api'
import { LOGIN_ROUTE } from '../../../config/routes'
//components
import CustomInput from '../../globals/formComponents/CustomInput'
import CustomCheckbox from '../../globals/formComponents/CustomCheckbox'
//icons
import { Person } from '@material-ui/icons'
//context
import { LoginContext } from '../../../context/LoginContext'
//types
import { USER_AUTH } from '../../../types/loginTypes'

const Login = (props) => {
    const { dispatch } = useContext(LoginContext)

    const [ userInfo, setUserInfo ] = useState({
        email: '',
        password: '',
        rememberUser: false,
        loginErrors: ''
    })

    const handleChange = (name, value) => {
        setUserInfo({...userInfo, [name]: value })
    }

    const handleCheckBoxChange = () => {
        setUserInfo({...userInfo, rememberUser: !userInfo.rememberUser })
    }

    const submitLogin = async(e) => {
        e.preventDefault()
        let body = {
            email: userInfo.email,
            password: userInfo.password
        }
        let loginResponse = await generalPostRequest(LOGIN_ROUTE, body)
        if(loginResponse.status && loginResponse.status !== 200){
            setUserInfo({...userInfo, loginErrors: loginResponse.data.errors[0].msg })
            return
        } else {
            setUserInfo({...userInfo, loginErrors: '' })
            if(userInfo.rememberUser)
            Cookies.set(AUTH_COOKIE, loginResponse.token, { expires: 7 })
            dispatch({type: USER_AUTH, isLoggedIn: true})
        }
    }

    return (
        <div className="login">
            <form onSubmit={(e)=>{submitLogin(e)}} className="login__form">
                <header className="login__form__header">Sign In</header>
                <figure className="login__form__figure">
                    <SvgIcon component={Person} className="login__form__figure__icon"/>
                </figure>
                <CustomInput 
                    value = {userInfo.email}
                    placeholder = {'Email'}
                    icon = {Person}
                    name = {'email'}
                    type = {'text'}
                    onChange = {handleChange}
                />
                <CustomInput 
                    value = {userInfo.password}
                    placeholder = {'Password'}
                    icon = {Person}
                    name = {'password'}
                    type = {'password'}
                    onChange = {handleChange}
                />
                
                {userInfo.loginErrors ? 
                    <p className="login__form__error">{userInfo.loginErrors}</p>
                    :
                    null
                }

                <CustomCheckbox 
                    checked = {userInfo.rememberUser}
                    onChange = {handleCheckBoxChange}
                    color = {'#fff'}
                    label = {'Remember me'}
                />
                
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
