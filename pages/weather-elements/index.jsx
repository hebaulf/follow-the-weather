import React from 'react';
import Image from 'next/image';

import style from './index.module.scss';
import Layout from '../../components/Layout/Layout';
import Heading from '../../components/PageIntro/PageIntro';
import PageLink from '../../components/PageLink/pagelink';

import { cultureInfo } from '../../utils/cultureInfo';

export default function WeatherElements() {
    return (
        <Layout>
            <div className={style.content}>
                <div className={style.hero}></div>
                <Heading
                    smalltext="A cuture shaped by"
                    largetext="the Elements"
                    introtext="Shaped by the harsh weather conditions, the Icelandic nation have a hard time following rules. When travelling in their own country, Icelanders often go by the motto: “Follow the weather” to make the most of their holiday. When in Iceland, one needs to be adabtable and prepared to change plans to maximise enjoyment." 
                />
                <div className={style.listwrap}>
                    <div className={style.list}>
                        {cultureInfo.map((item, index) => {
                            return (
                                <div className={style.item} key={index}>
                                    <div className={style.image}>
                                        <Image 
                                            src={`/images/culture/${item.image}`}
                                            alt={item.title} 
                                            height={540} 
                                            width={650} 
                                            blurDataURL={`/images/culture/blur-img/${item.image}`}
                                            placeholder="blur" />
                                    </div>
                                    <div className={style.text} >

                                        <h3 className={style.title}>{item.title}</h3>
                                        <p className={style.paragraph}>{item.text}</p>
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