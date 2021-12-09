import React from 'react';
import Image from 'next/image';

import style from './index.module.scss';
import Layout from '../../components/Layout/Layout';
import PageIntro from '../../components/PageIntro/PageIntro';
import PageLink from '../../components/PageLink/pagelink';

import { monthlyInfo } from '../../utils/monthlyInfo';

export default function WeatherMonths() {
    const iconSrc = '/icons/weatherInfo-icons/';

    return (
        <Layout>
            <div className={style.content}>
                <div className= {style.hero}>

                </div>
                <div className={style.intro}>
                    <PageIntro 
                        smalltext="Historical weather"
                        largetext="by Months" 
                        introtext="Shaped by the harsh weather conditions, the Icelandic nation have a hard time following rules. When travelling in their own country, Icelanders often go by the motto: “Follow the weather” to make the most of their holiday. When in Iceland, one needs to be adabtable and prepared to change plans to maximise enjoyment." 
                    />
                </div>
                <div className={style.listwrap}>
                    <div className={style.list}>
                        {monthlyInfo.map((month, index) => {
                            return (
                                <div className={style.item} key={index}>
                                    <div className={style.image}>
                                        <Image 
                                            src={`/images/months/${month.image}`}
                                            alt={month.title} 
                                            height={540} 
                                            width={650} 
                                            blurDataURL={`/images/months/blur-img/${month.image}`}
                                            placeholder="blur" 
                                        />
                                    </div>
                                    <div className={style.text} >
                                        <h3 className={style.title}>{month.title}</h3>
                                        <p className={style.paragraph}>{month.text}</p>
                                        <div className={style.info}>
                                            <div className={style.iteminfo}>
                                                <Image className={style.icon} src={`${iconSrc}Daylight.svg`} alt="daylight icon" height={16} width={16} />
                                                <p>{month.info.daylight}</p>
                                            </div>
                                            <div className={style.iteminfo}>
                                                <Image className={style.icon} src={`${iconSrc}Temperature.svg`} alt="temperature icon" height={16} width={16} />
                                                <p>{`${month.info.temperature}`}</p>
                                            </div>
                                            <div className={style.iteminfo}>
                                                <Image className={style.icon} src={`${iconSrc}Precipitation.svg`} alt="rainfall icon" height={16} width={16} />
                                                <p>{`${month.info.rainfall}`}</p>
                                            </div>
                                            <div className={style.iteminfo}>
                                                <Image className={style.icon} src={`${iconSrc}Wind.svg`} alt="wind icon" height={16} width={16} />
                                                <p>{`${month.info.wind}`}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={style.bottomlinks}>
                        <h3>Don&apos;t let the weather stop you!</h3>
                        <div className={style.pagelinks}>
                            <PageLink href="/weather-now" text="Weather today" />
                            <PageLink href="/weather-elements" text="Weather Culture" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}