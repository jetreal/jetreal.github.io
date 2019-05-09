import React from "react";
import styles from "./renderNote.module.css";



const RenderNote = (props) => {
    return (
        <>
            <div className={styles["note-list-item"]}
                 data-index={props.index}
                 onClick={props.onCheckItem}>
                {props.note}
            </div>
        </>
    )
}

export default RenderNote