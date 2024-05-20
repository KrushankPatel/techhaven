// components/TopOfferWindow.tsx
import React from 'react'
import Image from 'next/image'

import styles from './index.module.scss'

const TopOfferWindow: React.FC = () => {
  return (
    <div className={styles.containerTopOfferWindow}>
      <div className={styles.offersDiv}>
        <div className={styles.containerOffer1}>
          <div className={styles.contentDiv}>
            <div className={styles.TOWSub1CP1}>Holiday Deals</div> {/* Use styles object */}
            <div className={styles.TOWSub2CP2}>Up to 30% off</div> {/* Use styles object */}
            <div className={styles.TOWSub3CP3}>Selected Smartphone Brands</div>{' '}
            <div className={styles.buttonTue1}>
              <a href="http://localhost:3000/products" className={styles.buttonA}>
                <input className={styles.button} type="submit" value="Shop Now" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.containerOffer2}>
          <div className={styles.contentDiv}>
            <div className={styles.TOWSub1CP1}>Just In</div> {/* Use styles object */}
            <div className={styles.TOWSub2CP2}>Take Your Sound Anywhere</div>{' '}
            <div className={styles.TOWSub3CP3}>Top Headphone Brands</div> {/* Use styles object */}
            <div className={styles.buttonTue1}>
              <a href="http://localhost:3000/products" className={styles.buttonA}>
                <input className={styles.button} type="submit" value="Shop Now" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopOfferWindow
