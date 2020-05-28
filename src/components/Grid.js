import React from 'react'
import styled from 'styled-components'

const Grid = ({ children }) => <GridWrapper>{children}</GridWrapper>

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  @media (max-width: 563px) {
    grid-template-columns: 1fr;
  }
`

export default Grid
