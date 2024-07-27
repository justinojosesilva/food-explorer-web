import styled from "styled-components";

export const Container = styled.div`
  z-index: 50000;
  background-color: ${({ theme }) => theme.COLORS.DARK_400 };
  display: none;
  grid-area: content;
  width: 100%;
  padding:3.6rem 2.8rem 1.3rem 2.8rem;
  @media (max-width: 768px) {
    display: block;
  }

  > button {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-top: 3.6rem;
    padding: 1rem;
    cursor: pointer;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_300 };
    font-family: 'Poppins';
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 300;
    line-height: 140%;


    background: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000 };

  }

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open="true"] {
    transform: translateX(0);
  }
`

export const Search = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_900 };
  padding: 1.2rem 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  border-radius: .5rem;
  
  > input {
    border: none;
    background: transparent;
    width: 34.4rem;

    font-family: 'Roboto';
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100 };

    &::placeholder {
      color:  ${({ theme }) => theme.COLORS.LIGHT_500 };
    }
  }

  > svg {
    font-size: 2.4rem;
    color:  ${({ theme }) => theme.COLORS.LIGHT_400 };
  }

`