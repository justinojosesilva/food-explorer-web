import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  position: relative;
`

export const ButtonLeft = styled.div`
  width: 27.8rem;
  height: 46.2rem;
  background: ${({ theme }) => theme.COLORS.GRADIENTS_100 };
  position: absolute;
  top: 68px;
  left: -1px;
  padding: 18.4rem 21.9rem 22.4rem 1.9rem;
  z-index: 1;
  > button {
    color: ${({ theme }) => theme.COLORS.LIGHT_100 };
    display: flex;
    align-items: center;
    background: transparent;
    
    border: none;
    font-size: 4rem;
    cursor: pointer;
  }

  @media (max-width: 768px) { 
    display: none;
  }

`

export const ButtonRight = styled.div`
  width: 22.4rem;
  height: 46.2rem;
  background: ${({ theme }) => theme.COLORS.GRADIENTS_110 };
  position: absolute;
  top: 68px;
  right: 0px;
  z-index: 1;
  padding: 20.4rem 3.08rem 20.4rem 16.6rem;
  > button {
    color: ${({ theme }) => theme.COLORS.LIGHT_100 };
    display: flex;
    align-items: center;
    background: transparent;
    
    border: none;
    font-size: 4rem;
    cursor: pointer;
  }
  @media (max-width: 768px) { 
    display: none;
  }
`

export const Gallery = styled.div`
  margin-top: 2.3rem;
  display: grid;
  grid-auto-flow: column;
  gap: 2.7rem;
  position: relative;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) { 
    max-width: 43.6rem;
  }

`