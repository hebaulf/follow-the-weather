import style from './activityCard.module.scss'
import Image from 'next/image'


const ActivityCard = ({ activity }) => {
  
  return (
    <div className={style.card} key={activity.id}>
      <Image
          className={style.card__image}
          alt={activity.legalName}
          src={activity.photos[0] ? activity.photos[0].src : "https://res.cloudinary.com/itb-database/image/upload/s--_BCUaEbG--/c_fill,dpr_auto,f_auto,q_auto:eco,w_1280/v1/ServiceProviders/b1261387c65f57ba6ca4fc3e55d66d06" }
          height={200}
          width={300}
        />
        <div>
          <h4 className={style.card__title}>{activity.translations[1].name}</h4>
          <p>{activity.website}</p>
        </div>
    </div>
  ) 
}

export default ActivityCard;