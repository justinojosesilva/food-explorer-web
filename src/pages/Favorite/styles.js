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
    padding: 1.9rem 3.2rem;
    > h1 {
      font-size: 3.2rem;
    }
  }

  > section {
    margin-top: 3.2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4.8rem;

    @media (max-width: 768px) {
      min-width: 39.3rem;
      grid-template-columns: repeat(1, 1fr);
    }
  }

`
