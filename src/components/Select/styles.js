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

  > select {
    color: ${({ theme }) => theme.COLORS.LIGHT_100 };
    background: ${({ theme }) => theme.COLORS.DARK_800 };
    font-family: 'Roboto';
    border: none;
    border-radius: .8rem;
    padding: 1.2rem 1.4rem;

    appearance: none;
    -webkit-appearance: none;

    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_54)'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_54'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: right 15px top 50%;
  }
`