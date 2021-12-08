import style from './sidebar.module.scss'

const Sidebar = ({children}) => {
  return (
    <aside className={style.sidebar}>
      {children}
    </aside>
  )
}

export default Sidebar;