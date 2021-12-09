import Link from 'next/link';
import ArrowLinkIcon from '../../public/icons/ArrowLinkIcon.svg';
import style from './pagelink.module.scss';

const PageLink = (props) => {
    return (

        <Link href={props.href} passHref>
            <a className={style.link}>
                <p>{props.text}</p>
                <ArrowLinkIcon className={style.icon} />
            </a>
        </Link>

    )
}

export default PageLink;