import React from 'react'
import styles from './Cards.module.css'

const Cards = (props) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.top}>
            <h3>{props.name}</h3>
        </div>
        <div className={styles.fact}>
            <h2>{props.fact}</h2>
        </div>
        <div className={styles.description}>
         <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Cards
