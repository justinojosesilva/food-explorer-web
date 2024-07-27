import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  list-style-type: none;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`