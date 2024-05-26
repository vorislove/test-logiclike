import classNames from 'classnames'
import styles from './sidebar.module.scss'

interface Props {
  items: string[]
  activeItem: string
  onItemClick: (item: string) => void
}

export const Sidebar = ({ items, activeItem, onItemClick }: Props) => {
  const isActive = (item: string) => activeItem === item
  return (
    <aside className={styles.wrapper}>
      {items.map((item) => (
        <span
          className={classNames(styles.item, isActive(item) && styles.active)}
          key={item}
          onClick={() => onItemClick(item)}>
          {item}
        </span>
      ))}
    </aside>
  )
}
