
import styles from './styles.module.css'

export interface HeaderProps {
  text: string
}

const Header = ({ text }: HeaderProps) => (
  <h1 className={styles.appHeader}>
    {text}
  </h1>
)

export default Header