import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme, $isnew }) => $isnew === 'true'? 'transparent': theme.COLORS.LIGHT_600 };
  display: flex;
  align-items: center;
  width: ${({ $isnew }) => $isnew === 'true'? '13rem': '14rem'};
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