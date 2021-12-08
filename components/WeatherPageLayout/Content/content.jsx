import style from './content.module.scss'

const Content = ({children}) => {
  return (
    <div className={style.content}>
    {children}
    </div>
  )
}

export default Content