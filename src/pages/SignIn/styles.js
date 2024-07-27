import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 30.6rem;
  max-width: 136.8rem;
  align-items: center;
  justify-content: center;
  padding: 14.2rem 10.8rem;

  @media (max-width: 1319px) {
    gap: 7.3rem;
  }

  @media (max-width: 994px) {
    display: flex;
    flex-direction: column;
    padding: 15.8rem  4.7rem;
    gap: 3rem
  }

  > section {
    display: flex;
    gap: 1.9rem;

    @media (max-width: 980px) {
      gap: 1rem;
    }

    > img {
      width: 4.9rem;
      height: 4.7rem;

      @media (max-width: 980px) {
        width: 4.3rem;
        height: 4.3rem;
      }
    }

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100 };
      font-family: 'Roboto';
      font-size: 4.2rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      @media (max-width: 1024px) {
        font-size: 3.7rem;
      }
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.COLORS.DARK_700 };
    padding: 6.4rem;
    gap: 3.2rem;

    @media (max-width: 768px) {
      background: transparent;
    }

    border-radius: 1.6rem;

    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_100 };
      text-align: center;

      font-family: 'Poppins';
      font-size: 3.2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;

      @media (max-width: 768px) {
        display: none;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: .8rem;

      label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400 };
        font-family: 'Roboto';
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
      }

      input {
        min-width: 28.8rem;
        height: 4.8rem;
        padding: 1.2rem 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100 };

        background: transparent;
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100 };
        border-radius: .5rem;

        font-family: 'Roboto';
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;

        &::placeholder {
          color: ${({ theme }) => theme.COLORS.LIGHT_500 };
        }
      }
    }

    > a {
      color: ${({ theme }) => theme.COLORS.LIGHT_100 };
      text-decoration: none;
      text-align: center;

      font-family: 'Poppins';
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.4rem;
    }
  }
`