import React from 'react'
import styled from './layout.module.scss'

const sidePanel = ({ children }) => (
  <div className={styled.sidepanel}>
    {children}
  </div>
);

export default sidePanel;