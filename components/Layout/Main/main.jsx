import style from './main.module.scss'

const Main = ({children}) => {
  return (
    <main className={style.main}>
    {children}
    </main>
  )
}

export default Main