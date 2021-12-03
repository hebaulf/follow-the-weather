import React from 'react'
import styled from './layout.module.scss'

const MainView = ({ children }) => (
  <main className={styled.main}>
    {children}
  </main>
);

export default MainView;