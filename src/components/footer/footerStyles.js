import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  padding: 3em 0 5em;
  text-align: center;
  color: #fff;
  background-color: var(--primary-color);
  h3 {
    margin-bottom: 2em;
  }
  ul {
    list-style: none;

    li {
      margin-bottom: 20px;
      a {
        color: #fff;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    h3 {
      font-size: 27px;
    }
    ul {
      li {
        margin-bottom: 20px;
        a {
          font-size: 20px;
          color: #fff;
        }
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.smallDesktop}) {
    padding: 4em 0 3em;
    .container-content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      div {
        h3 {
          margin: 0 0 10px;
        }
        span {
          font-size: 20px;
          font-weight: 400;
        }
      }
      ul {
        margin: 0 auto;
      }
    }
  }
`;

export const TopArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  position: absolute;
  top: -25px;
  background-color: var(--primary-color);
  border-radius: 50%;
  border: 1px solid #fff;
  left: 50%;
  transform: translate(-50%);
  svg {
    font-size: 3rem;
  }

  @media (min-width: ${({ theme }) => theme.smallDesktop}) {
    width: 75px;
    height: 75px;
    top: -35px;
    svg {
      font-size: 4.2rem;
    }
  }
`;
