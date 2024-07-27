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

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-top: 3.2rem;

  @media (max-width: 768px) {
    margin-top: 2.4rem;  
  }
  
`

export const RowFooter = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3.2rem;
  list-style-type: none;
`

export const Section = styled.section`
  width: 83.7rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media (max-width: 768px) {
    max-width: 36.4rem; 
  }

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400 };
    font-family: 'Roboto';
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
  }

  > article {
    background: ${({ theme }) => theme.COLORS.DARK_800 };
    padding: .5rem .8rem;
    border-radius: .8rem;

    width: 83.7rem;
    @media (max-width: 768px) {
      max-width: 36.4rem; 
    }

    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
`

export const Ingredient = styled.div`
  background: ${({ theme, $isnew }) => $isnew === 'true'? 'transparent': theme.COLORS.LIGHT_600 };
  display: flex;
  align-items: center;
  width: ${({ theme, $isnew }) => $isnew === 'true'? '13rem': '14rem'};
  padding: .5rem 1.6rem;
  border-radius: .8rem;
  gap: .8rem;

  border: ${({ theme, $isnew }) => $isnew === 'true'? `1px dashed ${theme.COLORS.LIGHT_500}`: 'none' };;

  > input {
    color: ${({ theme }) => theme.COLORS.LIGHT_100 };
    width: 100%;
    background: transparent;
    border: 0;

    font-family: 'Roboto';
    font-size: 1.6rem;
    line-height: 100%
  }

  > button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    color: ${({ theme, $isnew }) => $isnew === 'true'? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100 };
    
    svg {
      font-size: 1.4rem;
    }
  }
`

