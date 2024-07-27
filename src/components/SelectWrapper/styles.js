import styled from "styled-components";

export const Container = styled.div`

  .category-select {
    font-family: 'Roboto';
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;
  }

  #select-button {
    margin-top: .5rem;
    display: flex;
    padding: 0.75rem;
    align-items: center;
    justify-content: space-between;
    border-radius: .5rem;

    @media (max-width: 768px) {
      min-width: 25rem;
    }

    background: ${({ theme }) => theme.COLORS.DARK_900 };
  }

  #selected-value {
    color: ${({ theme }) => theme.COLORS.LIGHT_400 };
    font-family: 'Roboto';
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;
  }

  #chevrons svg {
    width: 1rem;
    height: 1rem;
  }

  #chevrons {
    color: ${({ theme }) => theme.COLORS.LIGHT_400 };
  }

  .category-select {
    position: relative;
  }

  #options-view-button {
    all: unset;

    position: absolute;
    inset: 0;

    cursor: pointer;
    z-index: 3;
  }

  #options {
    margin-top: .25rem;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000 };
    background: ${({ theme }) => theme.COLORS.DARK_600 };
  }

  #options li {
    display: flex;
    align-items: center;
    gap: .5rem;

    padding: .3rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_900 };

    position: relative;

    > svg {
      font-size: .8rem;
      width: 1rem;
      height: 1rem;
    }

    > svg:last-child {
      margin-left: auto;
      display: none;
    }

    .label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400 }; 
    }

    &:has(input:checked),
    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000 };
      background: 1px solid ${({ theme }) => theme.COLORS.DARK_1000 };
    }

    &:has(input:fucus) {
      outline: 1px solid ${({ theme }) => theme.COLORS.DARK_1000 };
    }

    &:has(input:checked) [data-icon="check"] {
      display: block;
    }

    > input[type="radio"] {
      all: unset;

      position: absolute;
      inset: 0;

      cursor: pointer;
    }

  }
`
