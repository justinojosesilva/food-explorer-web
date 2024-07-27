import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.6rem 0;
  gap: 1.3rem;

  > img {
    width: 7.2rem;
    height: 7.2rem;
    border-radius: 50%;
  }

  > div {
    p {
      font-family: 'Poppins';
      font-size: 1.4rem;
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
      cursor: pointer;
    }
  }
`