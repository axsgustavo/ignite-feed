import styles from './styles.module.css'
import igniteLogo from '../../assets/simbol.svg'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={igniteLogo} />
      <strong>Ignite Feed</strong>
    </header>
  )
}