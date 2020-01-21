import React from 'react'
import styles from './Hero.module.css'

export default function Hero({title, subtitle, action, to, image}) {
  const imageStyle = {
    backgroundImage: `url(${image})`
  }

  return (
    <div className={styles.Hero} style={imageStyle}>
      <div class="center-content" className={styles.CenterContent}>
        <h1>{title}</h1>
        {subtitle && <h3>{subtitle}</h3>}
        {action && to && <a href={to} className={styles.Button}>{action}</a>}
      </div>
    </div>
  )
}
