import styled from "styled-components";

export const ContactoContainer = styled.section`
  .contact-info {
    margin-bottom: 2em;
    text-align: center;
    color: var(--color-text);
    h3 {
      color: inherit;
      font-size: 22px;
    }
    span {
      font-size: 18px;
      color: var(--color-subTitle);
    }
    div {
      margin-bottom: 30px;
      :last-child {
        margin-bottom: 0;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    input,
    textarea {
      background-color: var(--primary-color);
      color: var(--color-text);
    }
    input {
      height: 50px;
      border: none;
      outline: none;
      margin-bottom: 10px;
      font-weight: 600;
      width: 60%;
      padding: 5px;
      border-radius: 3px;
      ::placeholder {
        color: inherit;
      }
    }
  }

  .git-info {
    text-align: center;

    p {
      margin-bottom: 2em;
      position: relative;
      padding: 0 10px;
      color: var(--color-text);
      font-weight: 500;
    }
    p::after {
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translate(-50%);
      content: "";
      width: 40%;
      height: 3px;
      background-color: var(--primary-color);
    }
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    h3 {
      font-size: 20px;
    }
    span {
      font-size: 18px;
    }
  }
  .git-info {
    p {
      font-size: 22px;
    }
  }
  @media (min-width: ${({ theme }) => theme.smallDesktop}) {
    .contact-info {
      h3 {
        font-size: 23px;
      }
      span {
        font-size: 21px;
      }
    }
    .git-info {
      p {
        font-size: 25px;
      }
    }
  }
`;
