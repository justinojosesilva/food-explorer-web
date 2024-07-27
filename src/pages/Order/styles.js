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
  }

  > section {
    margin-top: 3.4rem;

    article {
      display: none;

      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        width: 100%;

        padding: .8rem 2rem;
        margin-bottom: 1.7rem;

        border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000 };
        border-radius: .8rem;

        div {
          display: flex;
          align-items: center;

          p + p {
            margin-left: 3.1rem;
          }
        }
      }
    }
  }

`

export const Table = styled.table`

  @media (max-width: 768px) {
    display: none;
  }
  
  thead tr th {
    padding: 2.1rem 2.4rem;
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};

    color: ${({ theme }) => theme.COLORS.LIGHT_300 };
    font-family: 'Roboto';
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 160%;
  }

  tbody tr td {
    padding: 1.6rem 2.4rem;
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};

    color: ${({ theme }) => theme.COLORS.LIGHT_400 };
    font-family: 'Roboto';
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;
  }
`