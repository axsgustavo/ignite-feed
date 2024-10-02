import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import styles from './styles.module.css'
import { Comment } from '../Comment'

interface Props {
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  content: {
    type: string
    content: string
  }[]
  publishedAt: Date
}

export function Post({ author, content, publishedAt }: Props) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const [comments, setComments] = useState<string[]>(['Um comentário legal!'])
  const [newCommentText, setNewCommentText] = useState('')

  function heandleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event?.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string) {
    const newComments = comments.filter(comment => comment !== commentToDelete)
    setComments(newComments)
  }

  return (
    <article className={styles.postContainer}>
      <header>
        <div className={styles.author}>
          <img src={author.avatarUrl} />
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(item => {
          if (item.type === 'paragraph') {
            return <p key={item.content}>{item.content}</p>
          } else if (item.type === 'link') {
            return <p key={item.content}><a href="#">{item.content}</a></p>
          } else {
            return <></>
          }
        })}
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>
      
      <form
        className={styles.commentForm}
        onSubmit={heandleCreateNewComment}
      >
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={newCommentText.length === 0}>
            Publicar
          </button>
        </footer>
      </form>

      <ul className={styles.comments}>
        {comments.map(comment =>
          <Comment
            key={comment}
            avatarUrl='https://github.com/axsgustavo.png'
            publishedAt={new Date('2024-09-25 12:00:00')}
            name='Gustavo Alves'
            comment={comment}
            onDeleteComment={() => deleteComment(comment)}
          />
        )}
      </ul>
    </article>
  )
}