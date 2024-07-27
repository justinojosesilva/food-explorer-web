import styled from "styled-components";

export const Container = styled.span`
  padding: .4rem .8rem;
  border-radius: .5rem;
  background: ${({ theme }) => theme.COLORS.DARK_1000 };
  color: ${({ theme }) => theme.COLORS.LIGHT_100 };

  font-family: 'Poppins';
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;

  margin-right: 1.2rem;

`