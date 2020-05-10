//dependencies
import React, { Fragment, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import SvgIcon from '@material-ui/core/SvgIcon'
//icons
import { MenuOpen } from '@material-ui/icons'

const SideBar = () => {

    const [ sideBarState, setSideBarState ] = useState({
        activeTab: '',
        collapsed: false
    })

    return (
        <span style={{position:"relative"}}>
            <figure
                className="sidebar__menu-icon"
                onClick={()=>{setSideBarState({...sideBarState, collapsed: !sideBarState.collapsed})}}
            >
                <SvgIcon 
                    component={MenuOpen}
                    style={ sideBarState.collapsed ?
                        {transform: 'rotate(-180deg)', transition:' all .4s', transitionDelay: '.2s'}
                        :
                        {}
                    }
                />
            </figure>
            <div className={ sideBarState.collapsed ? "sidebar sidebar__collapsed":"sidebar"}>

                <section className="sidebar__heading">
                    <h1>Facility name</h1>
                    <figure></figure>
                    <p>Mr.Demo User</p>
                </section>

                <nav className="sidebar__navigation">
                    <NavLink to="/dashboard" className="sidebar__navigation__link" onClick={()=>{setSideBarState({...sideBarState})}}>
                        <span className="sidebar__navigation__link__figure"></span>
                        <SvgIcon component={MenuOpen} />
                        <p>DASHBOARD</p>
                    </NavLink>
                    <NavLink to="/message" className="sidebar__navigation__link" onClick={()=>{setSideBarState({...sideBarState})}}>
                        <span className="sidebar__navigation__link__figure"></span>
                        <SvgIcon component={MenuOpen} />
                        <p>MESSAGE</p>
                    </NavLink>
                    <NavLink to="/leades" className="sidebar__navigation__link" onClick={()=>{setSideBarState({...sideBarState})}}>
                        <span className="sidebar__navigation__link__figure"></span>
                        <SvgIcon component={MenuOpen} />
                        <p>LEADS</p>
                    </NavLink>
                    <NavLink to="/calender" className="sidebar__navigation__link" onClick={()=>{setSideBarState({...sideBarState})}}>
                        <span className="sidebar__navigation__link__figure"></span>
                        <SvgIcon component={MenuOpen} />
                        <p>CALENDER</p>
                    </NavLink>
                </nav>
            </div>
        </span>
    )
}

export default SideBar
