import Image from 'next/image';
import style from './pageintro.module.scss';

const PageIntro = (props) => {
    return (
        <div className={style.intro}>
            <div className={style.heading}>
                <div className={style.arrow}>
                    <Image src="/icons/arrow.svg" alt="decorative arrow" height={30} width={129} />
                </div>
                <h1 className={`display`}><span>{props.smalltext}</span>{props.largetext}</h1>
            </div>
            <p>{props.introtext}</p>
        </div>
    )
}

export default PageIntro;