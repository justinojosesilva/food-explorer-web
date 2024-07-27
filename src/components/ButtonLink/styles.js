import styled from "styled-components";

export const Container = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;

  cursor: pointer;
  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_300 };
    font-family: 'Poppins';
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 140%;
  }
  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100 };
    width: 3.2rem;
    height: 3.2rem;
  }
`