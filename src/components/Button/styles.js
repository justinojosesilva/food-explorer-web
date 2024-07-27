import styled from "styled-components";

export const Container = styled.button`
  background: ${({ theme, $color }) => theme.COLORS[`${$color}`]};
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 1.2rem 2.4rem;
  border-radius: .5rem;

  font-family: 'Poppins';
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: .8rem;

  cursor: pointer;

  z-index: 100;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
    line-height: 1.6rem;
  }
  > svg {
    font-size: 2.2rem;
  }

  > span svg {
    font-size: .8rem;
  }
`

export const RoseButton = styled.button`
  background: ${({ theme }) => theme.COLORS.TOMATO_400};
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 1.2rem 2.4rem;
  border-radius: .5rem;

  font-family: 'Poppins';
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: .8rem;

  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }

  > svg {
    font-size: 2.2rem;
  }

  > span svg {
    font-size: .8rem;
  }
`

export const BlackButton = styled.button`
  background: ${({ theme }) => theme.COLORS.DARK_800};
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 1.2rem 2.4rem;
  border-radius: .5rem;

  font-family: 'Poppins';
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: .8rem;

  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
  > svg {
    font-size: 2.2rem;
  }

  > span svg {
    font-size: .8rem;
  }
`