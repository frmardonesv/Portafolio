import styled from "styled-components";

export const AboutContainer = styled.section`
  text-align: center;
  p {
    font-size: 18px;
    line-height: 30px;
    font-weight: 400;
    color: var(--color-text);
    margin-bottom: 25px;
  }
  p:nth-child(3) {
    font-weight: 500;
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    margin-left: auto;
    margin-right: auto;
    max-width: 750px;
    p {
      font-size: 20px;
      line-height: 35px;
      padding: 0 50px;
    }
    p:nth-child(3) {
      font-size: 21px;
      margin-bottom: 50px;
    }
  }

  @media (min-width: ${({ theme }) => theme.smallDesktop}) {
    padding: 0;
    p {
      font-size: 22px;
      line-height: 40px;
      padding: 0;
    }
    p:nth-child(3) {
      font-size: 23px;
    }
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    p {
      font-size: 28px;
      line-height: 45px;
    }
    p:nth-child(3) {
      font-size: 25px;
    }
  }
`;
