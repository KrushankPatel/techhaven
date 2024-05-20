// components/BestSellers.tsx
import React from 'react'

import App from '../Bestseller/index'

import styles from './index.module.scss'

const BestSellers: React.FC = () => {
  return (
    <div className={styles.containerBestSeller}>
      <div className={styles.CBHeading}>Best Sellers</div>
      <App />
    </div>
  )
}

export default BestSellers
