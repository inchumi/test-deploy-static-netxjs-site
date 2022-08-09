import React from 'react'
import styles from './Card.module.css'

const Card = ({title,description}) => {
    return (
        <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>{title} &rarr;</h2>
            <p>{description}</p>
        </a>
    )
}

export default Card