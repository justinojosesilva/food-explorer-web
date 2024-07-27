import styled from "styled-components"

export const Container = styled.h1`
  color: ${({ theme }) => theme.COLORS.LIGHT_300 };
  font-family: 'Poppins';
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 140%;

  margin-top: 2.4rem;

  @media (max-width: 768px) { 
    font-size: 1.8rem;
  }
`