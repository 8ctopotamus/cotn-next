import Logo from '../logo'
import styles from './header.module.css'

const Header = props => (
  <header className={styles.header}>
    <Logo fill="white" className={styles.logo} />
    <a href="#">BEGIN</a>
  </header>
)

export default Header