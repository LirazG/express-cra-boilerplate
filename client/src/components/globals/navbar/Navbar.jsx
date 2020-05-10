//dependencies
import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
//icons
import { NotificationsNone, ExitToApp } from '@material-ui/icons'
//imgs
import Logo from '../../../images/navbar/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <section></section>
            
            <section>
                <img src={Logo} alt="CRM-logo" className="navbar__logo"/>
            </section>
            <section>
                <span>
                    <SvgIcon component={NotificationsNone} className="navbar__icon"/>
                </span>
                <span>
                    <SvgIcon component={ExitToApp} className="navbar__icon"/>
                </span>
            </section>
        </nav>
    )
}

export default Navbar