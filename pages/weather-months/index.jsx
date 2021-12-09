import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout/Layout';
import Heading from '../../components/PageTitleBlock/Heading';
import style from './index.module.scss';
import { monthlyInfo } from '../../utils/monthlyInfo';

export default function WeatherMonths() {
    const tempIconSrc = '/icons/weatherinfo-icons/temperature.svg';
    const lightIconSrc = '/icons/weatherinfo-icons/daylight.svg';
    const rainIconSrc = '/icons/weatherinfo-icons/precipitation.svg';
    const windIconSrc = '/icons/weatherinfo-icons/wind.svg';

    return (
        <Layout>
            <div className={style.content}>
                <div className= {style.hero}>

                </div>
                <div className={style.intro}>
                    <Heading />
                    <p>Shaped by the harsh weather conditions, the Icelandic nation have a hard time following rules. When travelling in their own country, Icelanders often go by the motto: “Follow the weather” to make the most of their holiday. When in Iceland, one needs to be adabtable and prepared to change plans to maximise enjoyment.</p>
                </div>
                <div className={style.monthlist}>
                    {monthlyInfo.map((month, index) => {
                        return (
                            <div className={style.monthitem} key={index}>
                                <div className={style.image}>
                                    <Image 
                                        src={`/images/months/${month.image}`}
                                        alt={month.title} 
                                        height={540} 
                                        width={650} 
                                        blurDataURL={`/images/months/blur-img/${month.image}`}
                                        placeholder="blur" />
                                </div>
                                <div className={style.text} >
                                    <h3 className={style.title}>{month.title}</h3>
                                    <p className={style.paragraph}>{month.text}</p>
                                    <div className={style.monthinfo}>
                                        <div className={style.iteminfo}>
                                            <Image 
                                                className={style.icon}
                                                src={lightIconSrc} 
                                                alt="daylight icon" 
                                                height={16} 
                                                width={16} />
                                            <p>{month.info.daylight}</p>
                                        </div>
                                        <div className={style.iteminfo}>
                                            <Image 
                                                className={style.icon}
                                                src={tempIconSrc} 
                                                alt="temperature icon" 
                                                height={16} 
                                                width={16} />
                                            <p>{`${month.info.temperature}`}</p>
                                        </div>
                                        <div className={style.iteminfo}>
                                            <Image 
                                                className={style.icon}
                                                src={rainIconSrc} 
                                                alt="rainfall icon" 
                                                height={16} 
                                                width={16} />
                                            <p>{`${month.info.rainfall}`}</p>
                                        </div>
                                        <div className={style.iteminfo}>
                                            <Image 
                                                className={style.icon}
                                                src={windIconSrc} 
                                                alt="wind icon" 
                                                height={16} 
                                                width={16} />
                                            <p>{`${month.info.wind}`}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    )
}