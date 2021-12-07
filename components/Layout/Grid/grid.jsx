import style from './grid.module.scss'

const Grid = ({children}) => {
  return (
    <div className={style.grid}>
    {children}
    </div>
  )
}

export default Grid