import React from "react";
import styles from "./AgainBtn.module.css";


const AgainBtn = (props) => {
    return (
        <>
            <button
                data-index={props.index}
                className={styles['add-note']}
                onClick={props.onAgainClick}
            >
                Again ?
             </button>
        </>
    )
}

export default AgainBtn