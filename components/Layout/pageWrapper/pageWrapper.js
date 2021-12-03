import React from 'react'
import styled from '../layout.module.scss'
import MainView from '../mainView';
import SidePanel from '../sidePanel';

const PageWrapper = () => (
  <main className={styled.wrapper}>
    <MainView />
    <SidePanel />
    hello
  </main>
); 

export default PageWrapper;


