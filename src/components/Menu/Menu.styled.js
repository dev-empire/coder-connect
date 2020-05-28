/* eslint-disable no-confusing-arrow */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ccc;
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'tranlateX(-100%)')};
  @media (max-width: 563px) {
    width: 65%;
  }
  a {
    font-size: 1.5em;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: 400;
    color: #515151;
    text-align: center;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 563px) {
      font-size: 1.2rem;
      text-align: center;
    }
    &:hover {
      color: #515151;
    }
  }
`
