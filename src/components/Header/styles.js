import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;
  background-color: ${({ theme }) => theme.COLORS.DARK_600 };
  width: 100%;
  height: 10.4rem;
`

export const Content = styled.div`
  max-width: 136.8rem;
  height: 10.4rem;
  margin: 0 auto;

  padding: 2.4rem 12.3rem;

  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: space-between;

    padding: 5.6rem ${({ $isadmin }) => $isadmin === 'true'? '9.3rem': '2.8rem' } 2.4rem 2.8rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_300 };
    font-family: 'Roboto';
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;

  }

  > a:nth-child(4),
  > a:nth-child(5) {
    @media (max-width: 768px) {
      display: none;
    }
  }

  > button:nth-child(1) {
    display: none;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100 };
    cursor: pointer;
    svg {
      font-size: 2.4rem;
    }
    @media (max-width: 768px) {
      display: block;
    }
  }
`

export const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: .4rem;
  }
  
  > div {
    display: flex;

    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 768px) {
      font-size: 2.4rem;
      gap: .8rem;
    }

    svg {
      font-size: 3rem;
      color: ${({ theme }) => theme.COLORS.CAKE_100 };

      @media (max-width: 768px) {
        font-size: 2.4rem;
      }
    }

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100 };
      font-family: 'Roboto';
      font-weight: bold;
      font-size: 2.4rem;

      @media (max-width: 768px) {
        font-size: 2.1rem;
        align-items: flex-end;
      }
    }
  }

  span {
    color: ${({ theme }) => theme.COLORS.CAKE_200 };
    font-size: 1.2rem;
    font-family: 'Roboto';
    font-weight: 400;
    line-height: 160%;
  }
`

export const Search = styled.div`
  max-width: 58.1rem;
  background: ${({ theme }) => theme.COLORS.DARK_900 };
  padding: 1.2rem 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  border-radius: .5rem;

  @media (max-width: 768px) {
    display: none;
  }
  
  > input {
    border: none;
    background: transparent;
    min-width: 27.24rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;
    color:  ${({ theme }) => theme.COLORS.LIGHT_100 };

    &::placeholder {
      color:  ${({ theme }) => theme.COLORS.LIGHT_500 };
    }
  }

  > svg {
    font-size: 2.4rem;
    color:  ${({ theme }) => theme.COLORS.LIGHT_400 };
  }

`

export const Order = styled.button`
  background: ${({ theme }) => theme.COLORS.TOMATO_100 };
  color: ${({ theme }) => theme.COLORS.LIGHT_100 };
  padding: 1.2rem 3.2rem;
  width: 21.6rem;

  border: none;
  border-radius: .5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }

  > span {
    font-family: "Poppins", sans-serif; 
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
  }

  > svg {
    font-size: 3.2rem;
  }


`

export const MiniOrder = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100 };
  position: relative;
  cursor: pointer;
  
  > svg {
    font-size: 3.2rem;
  }

  > span {
    background: ${({ theme }) => theme.COLORS.TOMATO_100 };
    font-family: 'Poppins';
    font-size: 1.4rem;
    padding: .2rem .8rem;
    border-radius: 9.9rem;
    position: absolute;
    top: -8px;
    right: -10px;
  }
  @media (max-width: 768px) {
    display: block;
  }

`

export const SignOut = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100 };
    width: 2.2rem;
    height: 2.2rem;
  }
`

