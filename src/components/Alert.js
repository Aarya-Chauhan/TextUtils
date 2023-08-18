import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);

    }
    return (
        props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
            {capitalize(props.Alert.type)}:  {props.Alert.msg}
        </div>
    )
}

export default Alert
