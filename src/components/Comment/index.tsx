import { Trash } from 'phosphor-react'
import styles from './styles.module.css'

interface Props {
  avatarUrl: string
  name: string
  publishedAt: Date
  comment: string
  onDeleteComment: () => void
}

export function Comment({ avatarUrl, name, comment, onDeleteComment }: Props) {
  return (
    <div className={styles.commentContainer}>
      <img src={avatarUrl} />
      <div className={styles.content}>
        <div className={styles.comment}>
          <header>
            <div className={styles.author}>
              <strong>{name}</strong>
              <span>Cerca de 2h</span>
            </div>
            <button
              type='button'
              className={styles.buttonDelete}
              onClick={onDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>
          <div className={styles.text}>
            {comment}
          </div>
        </div>
      </div>
    </div>
  )
}