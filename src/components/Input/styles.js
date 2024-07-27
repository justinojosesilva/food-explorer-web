import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400 };
    font-family: 'Roboto';
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
  }

  > input {
    color: ${({ theme }) => theme.COLORS.LIGHT_100 };
    background: ${({ theme }) => theme.COLORS.DARK_800 };
    font-family: 'Roboto';
    border: none;
    border-radius: .8rem;
    padding: 1.2rem 1.4rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500 };

    }
  }


`