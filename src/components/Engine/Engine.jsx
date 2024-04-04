import React from "react";
import './Engine.css';

function Engine({val, funcChange}){
    return (
        <input className={'user_input'} onChange={funcChange} type="text" value={val} placeholder="Add new task"/>
    )
}

export default Engine;