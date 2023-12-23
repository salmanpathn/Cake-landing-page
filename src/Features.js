import React from "react";
import styles from './style/Features.module.css';

function Features(){
    return(
        <>
            <div className={styles['F-component']}>
                <div className={styles['title-heading']}>
                    <h2>Title</h2>
                    <p className={styles['title-paragraph']}>
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
                <div className={styles['title-heading']}>
                    <h2>Title</h2>
                    <p className={styles['title-paragraph']}>
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
            </div>
        </>
    )
}
export default Features;