import React from 'react'
import styled from '../layout.module.scss'


const PageWrapper = ({ children }) => (
  <main className={styled.wrapper}>
    {children}
  </main>
); 

export default PageWrapper;


