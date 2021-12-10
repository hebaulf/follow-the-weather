import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import style from './index.module.scss';
import Layout from '../../components/Layout/Layout';
import Grid from '../../components/WeatherPageLayout/Grid/grid';
import Content from '../../components/WeatherPageLayout/Content/content';
import Sidebar from '../../components/WeatherPageLayout/Sidebar/sidebar';

import { activityCategories } from '../../utils/activityCategories';

const IntroText = (props) => {
  return (
    <div className={style.intro}>
      <h5 className={style.pretitle}>{props.pretitle}</h5>
      <h1 className={style.title}>{props.title}</h1>
    </div>
  )
}

const WeatherNow = () => {

  return (
    <Layout>
      <Grid>
        <Content>
          <div className={style.hero} style={{ backgroundImage: `url("/images/today/weather-now.jpg")` }}>
            <IntroText 
              pretitle="The Weather Now" 
              title="It’s unusually nice in Stykkishólmur today" 
            />
            <Link href="#toDo" passHref><a className={style.button}>Things to do</a></Link>
          </div>
          <div id="toDo" className={style.belowthefold}>
            <IntroText 
              pretitle="Things to do in Stykkishólmur" 
              title="Looking at the weather today, we recommend..." 
            />
            <div className={style.activities}>
              {activityCategories.map((category, index) => {
                <div key={index} className={style.activityitem}>
                  <Image 
                    src={`/images/activities/${category.image}`}
                    alt={category.title} 
                    height={540} 
                    width={650} 
                    blurDataURL={`/images/activities/blur-img/${category.image}`}
                    placeholder="blur" 
                  />
                  <h4>{category.name}</h4>
                  <p>{category.shortdescription}</p>
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
