// custom input props list
// value: value (str)
// type: input type for example: text, password (str)
// placeholder: placeholder (str)
// onChange: value change function
// customStyles: custom styles for the input (object)
// icon: svg material ui icon (material svg icon)
// *************************************************** //

//dependencies
import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

const CustomInput = (props) => {
    return (
        <div className="custom-input">
            {props.icon ? 
                <label htmlFor = {props.name ? props.name:null}>
                    <SvgIcon component={props.icon} className=""/>
                </label>
                :
                null
            }
            <input
                type = {props.type ? props.type: "text"}
                value = {props.value ? props.value: ""}
                name = {props.name}
                placeholder = {props.placeholder ? props.placeholder:null}
                onChange = {(e)=>{props.onChange(props.name, e.target.value)}}
            />
        </div>
    )
}

export default CustomInput
