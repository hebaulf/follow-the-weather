import Image from 'next/image';
import style from './heading.module.scss';

const Heading = () => {
    return (
        <div className={style.heading}>
            <div className={style.arrow}>
                <Image src="/icons/arrow.svg" alt="decorative arrow" height={30} width={129} />
            </div>
            <h1 className={`display`}><span>Historical weather</span>by Month</h1>
        </div>
    )
}

export default Heading;