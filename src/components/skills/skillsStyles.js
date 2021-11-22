import styled from "styled-components";

export const SkillsContainer = styled.section`
  .container-cards {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    .container-cards {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      article:first-child {
        margin-right: 1%;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    .container-cards {
      max-width: 1000px;
      margin: 0 auto;
    }
  }
`;
