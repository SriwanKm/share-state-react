import React from "react";
import styles from "../page.module.css"


export default function Head(props) {
    return(
        <div>Current user: {props.userName}</div>
    )
}