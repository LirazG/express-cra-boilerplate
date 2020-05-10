// custom input props list
// checked: state of checkbox (bool)
// onChange: change function (func)
// color: color of checkbox
// size: size of checkbox
// *************************************************** //

//dependencies
import React, {Fragment} from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles'

const GreenCheckbox = withStyles({
    root: {
      color: '',
      '&$checked': {
        color: '',
      },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />)

const CustomCheckbox = (props) => {
    return (
        <div className="custom-checkbox">
            <GreenCheckbox 
                checked = {props.checked} 
                onChange = {props.onChange}
                style = {props.color ? {color:props.color}:{}}
                size = {props.size ? props.size:null}
            />
            {props.label ? 
                <label htmlFor="">{props.label}</label>
                :
                null
            }
        </div>
    )
}

export default CustomCheckbox
