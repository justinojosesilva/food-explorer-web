import styled from "styled-components";

export const Container = styled.article`
  width: 30.6rem;
  height: 46.2rem;
  padding: 2.4rem;

  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  border-radius: .8rem;
  border: .1rem solid ${({ theme }) => theme.COLORS.DARK_300};
  background: ${({ theme }) => theme.COLORS.DARK_200};
  position: relative;
  transition: filter 200ms ease-out, transform 600ms ease-in;

  --delay: .0s;
  animation: appear .4s var(--delay) backwards;

  @keyframes move {
  from {
    transform: translateY(var(--startY));
  }
}

  @media (max-width: 768px) {
    width: 21rem;
    height: 29.2rem;
    gap: 1.2rem;
  }

  > span:nth-last-child(1) {
    position: absolute;
    z-index: 100;
    
    right: 18px;
    top: 16px;
    > button {
      color: ${({ theme }) => theme.COLORS.LIGHT_300 };    
      background: transparent;
      border: none;
      font-size: 2.4rem;
      cursor: pointer;
    }
  
  }

  > img {
    display: flex;
    width: 17.6rem;
    height: 17.6rem;
    justify-content: center;
    align-items: center;
    z-index: 100;

    border-radius: 50%;
    @media (max-width: 768px) {
      width: 8.8rem;
      height: 8.8rem;
    }
    
  }

  > img:hover {
    filter: hue-rotate(7deg) contrast(101%) saturate(130%);

    transform: scale(1.1) rotate(-2deg);
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_300 };
    z-index: 100;
    text-align: center;
    font-family: 'Poppins';
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    @media (max-width: 768px) {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
    }
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400 };
    text-align: center;
    font-family: 'Roboto';
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    @media (max-width: 768px) {
      display: none;
    }
  }

  > span {
    color: ${({ theme }) => theme.COLORS.CAKE_200 };
    font-family: 'Roboto';
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    @media (max-width: 768px) {
      font-size: 1.6rem;
      line-height: 100%;
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
    }
  }
`