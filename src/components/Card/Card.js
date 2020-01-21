import React from 'react'
import styles from './Card.module.css'

export default function Card({title, description}) {
  return (
    <div className={styles.Card}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
