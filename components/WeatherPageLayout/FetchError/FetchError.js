import style from './fetchError.module.scss'

const FetchError = ({ message }) => (
  <div className={style.error}>
    {message}s
  </div>
)

export default FetchError