import React from 'react';
import './SimpsonComponent.css'

export const SimpsonComponent = (props) => {
    let {itemName, pic,id,status,species,gender} = props
    let classNameItem = 'card'
    let classNamePic = 'picture'
    return (

        <div className={classNameItem}>
            <h2>{id} {itemName}</h2>
            <img className={classNamePic} src={pic}/>
            <b>Species - {species}</b>
            <b>Gender - {gender}</b>
            <b>Status - {status}</b>

        </div>
    )
};