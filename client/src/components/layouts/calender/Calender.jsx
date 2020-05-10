//dependencies
import React, { useState, useEffect } from 'react'
import moment from 'moment'
import SvgIcon from '@material-ui/core/SvgIcon'
//components
import Popup from '../../globals/popup/Popup'
//icons
import { ArrowBackIos, Add } from '@material-ui/icons';
//functions
import { generalGetRequest } from '../../../functions/api';
//routes
import { GET_CALENDER_DATA } from '../../../config/routes';

const Calender = () => {

    const [ calenderInfo, setCalenderInfo ] = useState({
        date: moment().startOf('month')
    })

    // mimic component did mount by passing empty array to useEffect as a parameter
    useEffect(() => {
        (async () => {
            // let calenderData = await generalGetRequest(GET_CALENDER_DATA);
            let calenderData = []
           
        })()
    }, [])

    return (
        <div className="calender">

            <Popup>
                hi
            </Popup>

            <header className="calender__header">
                <figure>
                    <SvgIcon component={ArrowBackIos}/>
                </figure>
                
                <h3>{calenderInfo.date.format('MMMM YYYY')}</h3>

                <figure>
                    <SvgIcon component={ArrowBackIos}/>
                </figure>
            </header>

            <main>

            </main>

            <figure className="calender__add-task">
                <SvgIcon component={Add}/>
            </figure>
        </div>
    )
}

export default Calender
