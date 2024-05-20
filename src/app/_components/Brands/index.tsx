import Image from 'next/image'

import styles from './index.module.scss'

const Brands = () => {
  return (
    <div className={styles.brands}>
      <div className={`${styles.item} ${styles.brand1}`}>
        <h1 className={styles.brandsHead}>BRANDS</h1>
      </div>

      <div className={styles.item}>
        <Image
          src="https://static.wixstatic.com/media/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.png/v1/fill/w_251,h_142,q_90/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.png"
          width={251}
          height={142}
          alt="ZODIAC"
        />
      </div>

      <div className={styles.item}>
        <Image
          src="https://static.wixstatic.com/media/c837a6_00d04f5724314ec689946e22d4b8b49c~mv2.png/v1/fill/w_251,h_142,q_90/c837a6_00d04f5724314ec689946e22d4b8b49c~mv2.png"
          width={251}
          height={142}
          alt="Zoro"
        />
      </div>

      <div className={styles.item}>
        <Image
          src="https://static.wixstatic.com/media/c837a6_59362db94e2d47f299879adb4156d23b~mv2.png/v1/fill/w_252,h_142,q_90/c837a6_59362db94e2d47f299879adb4156d23b~mv2.png"
          width={252}
          height={142}
          alt="GXL"
        />
      </div>

      <div className={styles.item}>
        <Image
          src="https://static.wixstatic.com/media/c837a6_184d980948c744d6a2ce33533cfaab1e~mv2.png/v1/fill/w_251,h_142,q_90/c837a6_184d980948c744d6a2ce33533cfaab1e~mv2.png"
          width={251}
          height={142}
          alt="PJK"
        />
      </div>

      <div className={styles.item}>
        <Image
          src="https://static.wixstatic.com/media/c837a6_e4058f072b2c40bf9e8857c180342582~mv2.png/v1/fill/w_251,h_142,q_90/c837a6_e4058f072b2c40bf9e8857c180342582~mv2.png"
          width={251}
          height={142}
          alt="HORIZON"
        />
      </div>
    </div>
  )
}

export default Brands
