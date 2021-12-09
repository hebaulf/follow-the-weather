import Map from '../../Map/map'
import style from './content.module.scss'
import ActivityList from '../../ActivityList/ActivityList'
import Mapbox from '../../Mapbox/mapbox';

const Content = () => {
  return (
    <div className={style.content}>
          <Mapbox />
    </div>
  )
}

export default Content