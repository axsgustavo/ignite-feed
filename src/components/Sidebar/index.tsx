import { PencilSimpleLine } from 'phosphor-react'
import styles from './styles.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <img
        className={styles.banner}
        src='https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
    
      <div className={styles.profile}>
        <img src="https://github.com/axsgustavo.png" />
        <strong>Gustavo Alves</strong>
        <span>Frontend Develop</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={24} weight="bold" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}