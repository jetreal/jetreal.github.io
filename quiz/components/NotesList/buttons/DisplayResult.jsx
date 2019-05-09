import React from "react";
import styles from './displayResult.module.css'

const DisplayResult = (props) => {
        return (

                <div className={styles["displayResult"]}
                        style={{
                                backgroundImage: props.url
                        }}>
                        <p>
                                {props.text}
                        </p>
                        <div className={styles['divWhisNumber']}>
                                {props.trueNumbers}
                        </div>
                </div>

        )
}

export default DisplayResult