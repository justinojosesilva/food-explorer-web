import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  z-index: 100;
  
  > button {
    background: transparent;
    border: none;
    cursor: pointer;
    
    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2.4rem;
    }
  }

  > input {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2.4rem;
    width: 2.3rem;
    height: 3.2rem;
  }
`