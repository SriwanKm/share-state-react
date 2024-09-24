import React from "react";
import styles from "../page.module.css"


export default function Body(props) {
    return(
        <h1>Welcome back, {props.userName}!</h1>
    )
}