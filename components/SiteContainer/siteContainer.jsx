import style from './siteContainer.module.scss'

const SiteContainer = ({children}) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}

export default SiteContainer