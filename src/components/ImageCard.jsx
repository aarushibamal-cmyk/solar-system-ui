import React from 'react'
import styles from './ImageCard.module.css'

function ImageCard(props) {
    return (
        <div className={styles.imageWrapper}>
            <img src={props.image} className={styles.image} alt="planet"></img>
        </div>
    )
}

export default ImageCard
