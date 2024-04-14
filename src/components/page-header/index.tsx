import styles from './styles.module.css'

export interface HeaderProps {
  text: string
}

const Header = ({ text }: HeaderProps) => (
  <header className={styles.AppHeader}>{text}</header>
)

export default Header
