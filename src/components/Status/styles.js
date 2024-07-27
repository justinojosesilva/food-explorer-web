import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

  > p {
    font-family: 'Roboto';
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;
  }
`
export const Yellow = styled.span`
  color: ${({ theme }) => theme.COLORS.CARROT_100};
  font-size: 2.5rem;
`

export const Red = styled.span`
  color: ${({ theme }) => theme.COLORS.TOMATO_300};
  font-size: 2.5rem;
`

export const Green = styled.span`
  color: ${({ theme }) => theme.COLORS.MINT_100};
  font-size: 2.5rem;
`

