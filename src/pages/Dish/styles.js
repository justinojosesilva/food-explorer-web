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
  padding: 2.4rem 12.3rem;
  @media (max-width: 768px) {
    padding:1.6rem 5.6rem 3.3rem 5.6rem;

  }

`

export const Display = styled.section`
  margin-top: 4.2rem;
  display: flex;
  align-items: center;
  gap: 4.7rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2.4rem;
  }

  > img {
    width: 39rem;
    height: 39rem;
    border-radius: 50%;

    @media (max-width: 768px) {
      width: 26.4rem;
      height: 26.4rem;
    }
  }

  > article {
    color: ${({ theme }) => theme.COLORS.LIGHT_300 };

    h1 {
      font-family: 'Poppins';
      font-size: 4rem;
      font-weight: 500;
      line-height: 140%;
      margin-bottom: 2.4rem;
      @media (max-width: 768px) {
        font-size: 2.7rem;
        text-align: center;
      }
    }
    
    p {
      font-family: 'Poppins';
      font-size: 2.4rem;
      font-weight: 400;
      line-height: 140%;
      margin-bottom: 2.4rem;
      @media (max-width: 768px) {
        font-size: 1.6rem;
        text-align: center;
      }
    }

    > div {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 2.4rem;
        align-items: center;
        justify-content: center;
        padding: 0 .1rem;
      }
    }

  }
`

export const PriceQuantity = styled.section`
  margin-top: 4.8rem;
  
  display: flex;
  align-items: center;
  gap: 3.3rem;

  > button:nth-child(3) {
    display: none;
  } 

  @media (max-width: 768px) {
    > button:nth-child(2) {
      display: none;
    } 
    
    > button:nth-child(3) {
      display: flex;
    } 
  }
`