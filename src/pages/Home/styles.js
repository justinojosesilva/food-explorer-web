import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.4rem auto 7.7rem;
  grid-template-areas: 
    "header"
    "content"
    "footer"
  ;
`

export const Content = styled.main`
  grid-area: content;
  max-width: 136.8rem;
  margin: 0 auto;
  padding:2.4rem 12.3rem;
  overflow-y: auto;
  scrollbar-color: red;

  @media (max-width: 768px) {
    max-width: 100%;
    padding:4.4rem 1.6rem 2.4rem 2.4rem;

  }

  &::-webkit-scrollbar {
    width: 1rem;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.DARK_400 }; 
  }
  
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.DARK_400 }; 
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.COLORS.DARK_700 }; 
  }

`

export const Section = styled.section`
  width: 100%;
  position: relative;
`

export const Banner = styled.section`
  width: 100%;
  max-height: 26rem;
  display: flex;
  padding: 8.8rem 10rem 9.2rem ;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 14rem;
  margin-bottom: 6.3rem;
  position: relative;

  background: ${({ theme }) => theme.COLORS.GRADIENTS_200 };

  @media (max-width: 768px) { 
    flex-direction: column;
    align-items: flex-start;
    max-height: 12rem;
    padding: 3.6rem 2.1rem 2.2rem 16.7rem ;
    margin-top: 0rem;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300 };
    font-family: 'Poppins';
    font-size: 4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    @media (max-width: 768px) { 
      font-size: 1.8rem;
      font-weight: 600;
    }
  }

  > p {
    font-family: 'Roboto';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    @media (max-width: 768px) { 
      font-family: 'Poppins';
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 140%;
    }
  }
`

export const Image = styled.img`
  position: absolute;
  z-index: 1;
  top: -154px;
  left: -52px;

  @media (max-width: 768px) {
    width: 19.1rem;
    height: 14.9rem;
    top: -30px;
    left: -24px;
  }
`