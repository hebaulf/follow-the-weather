import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '../../components/PageTitleBlock/Heading';
import style from './index.module.scss';
import { monthlyInfo } from '../../utils/monthlyInfo';

export default function WeatherMonths() {
    return (
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
                                <Image src={month.image} alt={month.title} height={540} width={650} />
                            </div>
                            <div className={style.text} >
                                <h3>{month.title}</h3>
                                <p>{month.text}</p>
                                <div className={style.monthinfo}>
                                    <p className={style.daylight}>{month.info.daylight}</p>
                                    <p className={style.temp}>{month.info.temperature}</p>
                                    <p className={style.precipitation}>{month.info.rainfall}</p>
                                    <p className={style.wind}>{month.info.wind}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            

        </div>
    )
}