import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import style from './index.module.scss';
import Layout from '../../components/Layout/Layout';
import Grid from '../../components/WeatherPageLayout/Grid/grid';
import Content from '../../components/WeatherPageLayout/Content/content';
import Sidebar from '../../components/WeatherPageLayout/Sidebar/sidebar';

import { activityCategories } from '../../utils/activityCategories';

const WeatherNow = () => {
 
  return (
    <Layout>
      <Grid>
        <Content>
          <div className={style.hero} style={{ backgroundImage: `url("/images/culture/culture-cover.jpg")` }}>
            <div className={style.intro}>
              <h4 className={style.pretitle}></h4>
              <h1 className={style.title}></h1>
            </div>
          </div>
          <div className={style.extracontent}>
            <div className={style.intro}>
              <h4 className={style.pretitle}></h4>
              <h1 className={style.title}></h1>
            </div>
            <div className={style.activities}>
              {activityCategories.map((activity, index) => {
                <div key={index} className={style.activityitem}>
                  <Image 
                    src={`/images/months/${activity.image}`}
                    alt={activity.title} 
                    height={540} 
                    width={650} 
                    blurDataURL={`/images/months/blur-img/${activity.image}`}
                    placeholder="blur" 
                  />
                  <h4>{activity.title}</h4>
                  <p>{activity.shortdescription}</p>
                  <Link href={`/weather-now`} passHref><a className={style.morebutton}>View More</a></Link>
                </div>
              })}
            </div>  
          </div>

        </Content>
        <Sidebar>

        </Sidebar>
      </Grid>
    </Layout>
  )
}

export default WeatherNow;
