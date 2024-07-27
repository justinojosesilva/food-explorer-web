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
  width: 136.8rem;
  margin: 0 auto;
  padding: 2.4rem 12.3rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.9rem 3.2rem;
    > h1 {
      font-size: 3.2rem;
    }

    #payment {
      display: none;
    }
  }

  > section {
    display: flex;
    flex-direction: row;
    gap: 7.5rem;

    article > h1 {
      margin-bottom: 3.2rem;
    }

    article {

      h2 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300 };
        font-family: 'Poppins';
        font-size: 2rem;
        font-weight: 500;
        line-height: 160%;
      }
    }

    article > div > span {
      display: flex;
      justify-content: flex-end;
      margin-top: 3.1rem;
      button {
        max-width: 18rem;
        display: none;

        @media (max-width: 768px) {
          display: block;
        }
      } 
    }
  }

`

export const OrderItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.6rem 0;
  gap: 1.3rem;

  > img {
    width: 7.2rem;
    height: 7.2rem;
  }

  > div {
    p {
      font-family: 'Poppins';
      font-size: 2rem;
      font-weight: 500;
      line-height: 160%;

      span {
        font-family: 'Roboto';
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 160%;
      }
    }

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.TOMATO_400 };

      font-family: 'Roboto';
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 160%;
    }
  }
`

export const TypePayment = styled.section`
  display: flex;
  border-radius: 8px 8px 0px 0px;
  cursor: pointer;

  border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  @media (max-width: 768px) {
    max-width: 35.5rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 26.5rem;
    height: 8.1rem;
    padding: 1.2rem 1.4rem;
    @media (max-width: 768px) {
      max-width: 17.7rem;
    }

    &:nth-child(1) {
      border-right: 2px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    }

    &:nth-last-child(1) {
      border-left: 2px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    }



  }

`

export const PaymentPix = styled.section`
  border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_600}; 
  border-radius: 0px 0px 8px 8px;
  padding: 4.7rem 13rem;

  @media (max-width: 768px) {
    max-width: 35.5rem;
    padding: 3.1rem 8.6rem;
  }

  > svg {
    width: 27rem;
    height: 27rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_600};

    @media (max-width: 768px) {
      width: 17.9rem;
      height: 17.9rem;
    }
  }
`

export const PaymentCard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.7rem;
  border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_600}; 
  border-radius: 0px 0px 8px 8px;
  padding: 5.9rem 9.1rem;

  @media (max-width: 768px) {
    max-width: 35.5rem;
    padding: 5.7rem 2.7rem;
  }

  li {
    display: flex;
    flex-direction: row;
    gap: 1.7rem;
  }

  li > div > label {
    font-family: 'Roboto';
    color: ${({ theme }) => theme.COLORS.LIGHT_600};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
  }

  li > div > input {
    background: none;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    padding: 1.2rem 1.4rem;
    border-radius: .5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    @media (max-width: 768px) {
      width: 100%;
    }

    &::placeholder {
      font-family: 'Roboto';
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 100%;
    }
  }

  li > div {
    display: flex;
    flex-direction: column;
    gap: .8rem;
    width: 100%;
  }
`

export const PaymentStatus = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.7rem;
  border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_600}; 
  border-radius: 0px 0px 8px 8px;
  padding: 5.9rem 9.1rem;

  @media (max-width: 768px) {
    max-width: 35.5rem;
    padding: 11.5rem 2.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    gap: 3.7rem;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2.4;
    }
    
    svg {
      width: 12.8rem;
      height: 12.8rem;

      @media (max-width: 768px) {
        width: 9.6rem;
        height: 9.6rem;
      }
    }

    p {
      font-family: 'Roboto';
      font-size: 2.4rem;
      font-weight: 700;
      line-height: normal;

      @media (max-width: 768px) {
        font-size: 2rem;
        line-height: 160%;
      }
    }
  }

  
`
