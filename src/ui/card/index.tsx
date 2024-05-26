import { Course } from 'src/types'
import styles from './card.module.scss'

export const Card = ({ name, bgColor, image }: Course) => {
  return (
    <div className={styles.wrapper}>
      <div
        style={{ backgroundColor: bgColor }}
        className={styles.img_container}>
        <img src={image} className={styles.image} />
      </div>
      <div className={styles.title_container}>
        <span className={styles.title}>{name}</span>
      </div>
    </div>
  )
}
