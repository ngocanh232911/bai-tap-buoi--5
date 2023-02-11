import React from 'react'
import "./index.css"
function Error() {
	return(
        <div id="MissedGoal" style={{
            backgroundColor :"red"
        }} >
            Click me
        </div>
    );
}

function Warning() {
	return (
        <div id="MadedGoal" style={{
            background :"yellow"
        }} > Click me
        </div>
    );
}
function Success() {
	return (
        <div id="Success" style={{
            background :"green"
        }} > Click me
        </div>)}

function Button(props){
    
const isGoal=props.isGoal;
switch(isGoal){
    case "error":
    return <Error></Error>;
    case "warning":
    return <Warning></Warning>;
    case "success":
    return <Success></Success>
}}
export default Button

