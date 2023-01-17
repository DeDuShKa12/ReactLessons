import React from 'react';
import './SimpsonComponent.css'

export const SimpsonComponent = (props) => {
    let {itemName, pic, text} = props
    let classNameItem = 'card'
    let classNamePic = 'picture'
    return (

        <div className={classNameItem}>
            <h2>{itemName}</h2>
            <img className={classNamePic} src={pic}/>
            <b>{text}</b>

        </div>
    )
};