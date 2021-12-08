import PageTransition from './page-transition';
import SmoothScroll from './smooth-scroll';
import SiteContainer from '../components/SiteContainer/siteContainer';
import Header from '../components/Header/header';
import Main from '../components/Layout/Main/main';

const Page = ({ children }) => {
  return (
    <SiteContainer>
      <Header />
      <Main>
       {children}
      </Main>
    </SiteContainer>
  )
};

export default Page;