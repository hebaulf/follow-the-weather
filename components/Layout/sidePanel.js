import React from 'react'
import styled from './layout.module.scss'

const SidePanel = ({ children }) => (
  <div className={styled.side}>
    {children}
  </div>
);

export default SidePanel;