//dependencies
import React from 'react'
import { Switch, Route } from 'react-router-dom'
//components
import SideBar from '../../globals/sideBar/SideBar'
import Navbar from '../../globals/navbar/Navbar'
import Calender from '../../layouts/calender/Calender'

const MainController = () => {
    return (
        <div className="main-controller">
            <SideBar />
            <div className="main-controller__content">
                <Navbar />
                <div className="main-controller__content__routes">
                    <Switch>
                        <Route path="/dashboard" render={()=><div>dashboard</div>}/>
                        <Route path="/message" render={()=><div>message</div>}/>
                        <Route path="/leades" render={()=><div>leades</div>}/>
                        <Route path="/calender" render={()=> <Calender />}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default MainController
