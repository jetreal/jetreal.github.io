import React from "react";
import styles from "./header.module.css";


const Header = (props) => {

        return (
            <div className={styles['headerDiv']}>
                <p>
                    {props.notes.questions[props.notes.currentPage].question}
                </p>
            </div>
        )

}

export default Header