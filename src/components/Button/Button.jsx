import React from "react";
import './Button.css';

function Button({addFunc}){
    return (
        <button onClick={addFunc} className="add_task_button">+</button>
    )
}

export default Button;