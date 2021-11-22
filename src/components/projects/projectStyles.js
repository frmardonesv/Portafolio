import styled from "styled-components";

export const ProjectContainer = styled.section`
  .projects-section {
    h2 {
      color: var(--color-text);
      text-align: center;
      margin-bottom: 20px;
    }
    .projects-container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
  article:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme }) => theme.smallDesktop}) {
    .projects-section {
      .projects-container {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 25px;
      }
    }
  }
`;
