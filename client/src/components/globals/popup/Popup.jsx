//dependencies
import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
//icons
import { Close } from '@material-ui/icons'


const Popup = (props) => {
    return (
        <aside className="popup">
            <div className="popup__curtain"></div>
            <div className="calender__popup-content">
                <figure>
                    <SvgIcon component={Close} />
                </figure>
                {props.children}
            </div>
        </aside>
    )
}

export default Popup
