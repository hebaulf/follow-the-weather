import { NextSeo } from 'next-seo';
import PageTransition from './page-transition';
import SmoothScroll from './smooth-scroll';


const Page = ({ children, seo }) => {
  return (
    <>
      <NextSeo {...seo} />
      <PageTransition />
      <SmoothScroll>{children}</SmoothScroll>
    </>
  )
};

export default Page;