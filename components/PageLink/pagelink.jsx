import Link from 'next/link';
import Image from 'next/image';
import style from './pagelink.module.scss';

const PageLink = (props) => {

    return (

        <Link href={props.href} passHref>
            <a className={style.link}>
                <p>{props.text}</p>
                <Image className={style.icon} src={`/icons/ArrowLinkIcon.svg`} alt="daylight icon" height={48} width={72} />
            </a>
        </Link>

    )
}

export default PageLink;