import React from "react";
import "./Tempholder.css";
const Tempholder = (props) =>{
    return (<div>
        <p>Temperature in {props.unit}:</p><br/>
        <input className= "inp" value ={props.value} type = "text" id = {props.id} onInput = {props.change}></input>
    </div>)
}
export default Tempholder;