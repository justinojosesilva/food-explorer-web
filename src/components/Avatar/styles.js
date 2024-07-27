import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 22.9rem;
  gap: 1.6rem;

  @media (max-width: 768px) {
    min-width: 36.4rem;
  }
  
  > label:nth-child(1) {
    color: ${({ theme }) => theme.COLORS.LIGHT_400 };
    font-family: 'Roboto';
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
  }

  > label + label {
    background: ${({ theme }) => theme.COLORS.DARK_800 };
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: .8rem;
    gap: .8rem;

    padding: .8rem 3.2rem;

    @media (max-width: 768px) {
      justify-content: flex-start;
    }

    svg {
      font-size: 2rem;
    }

    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_100 };
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 2.4rem;

    }

    input {
      display: none;
    }
  }

`