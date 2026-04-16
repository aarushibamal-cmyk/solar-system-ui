import React from 'react'
import styles from './ImageCard.module.css'

function ImageCard(props) {
    return (
        <div className={styles.image}>
            <img src={props.image}></img>
        </div>
    )
}

export default ImageCard
