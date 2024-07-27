import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  background-color: ${({ theme }) => theme.COLORS.DARK_600 };
  width: 100%;
  height: 7.7rem;
`

export const Content = styled.div`
  max-width: 136.8rem;
  height: 7.7rem;
  margin: 0 auto;

  padding: 2.4rem 12.3rem;

  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 2.4rem 2.7rem;
  }
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
      gap: .3rem;
    }
    img {
      width: 3.3rem;
      height: 3.3rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_700 };

      @media (max-width: 768px) {
        width: 2.2rem;
        height: 1.8rem;
      }
    }

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_700 };
      font-weight: bold;
      font-size: 2.4rem;
      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
  }
`

export const Copywriting = styled.span`
  color: ${({ theme }) => theme.COLORS.LIGHT_200 };
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 160%;

  @media (max-width: 768px) {
    text-align: right;
    font-family: "DM Sans";
    font-size: 1.2rem;
  }

`