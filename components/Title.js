import React from 'react'
import styles from './Title.module.css'

export const Title = ({ nombre }) => {
    return (
        <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">{nombre}</a>
        </h1>
    )
}
