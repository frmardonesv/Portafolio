import styled from "styled-components";
import image from "../../assets/img/hero.png";
import blob from "../../assets/img/blob.png";

export const HomeContainer = styled.section`
  margin: 2em 0 2em;
  width: 100%;
  text-align: center;
  color: var(--color-text);

  .right-container {
    margin-bottom: 2.5em;
    width: 100%;
    height: 320px;
    border-radius: 5px;
    position: relative;
    background-image: url(${blob});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    .container-phone {
      position: absolute;
      width: 60%;
      max-width: 170px;
      height: 110%;
      top: 50%;
      left: 50%;
      transform: rotate(-2deg) translate(-50%, -50%);
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid var(--border-color);
      .container-image {
        width: 100%;
        height: 100%;
        background-color: black;
        background-size: cover;
        background-position: top;
        transition: ease-in 15s;
        :hover {
          background-position: bottom;
        }
        &.image {
          background-image: url(${image});
        }
      }
    }
  }

  .name {
    margin-bottom: 20px;
    h1 {
      font-weight: 600;
      font-size: 30px;
    }
    span {
      color: var(--color-subTitle);
      font-size: 20px;
      font-weight: 500;
    }
  }
  p {
    color: inherit;
    font-weight: 400;
    font-size: 17px;
    line-height: 35px;
    padding: 0 15px;

    margin-bottom: 35px;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    padding: var(--padding-tablet);
    margin: 2em 0 4em;
    .container {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      .right-container {
        width: 49.5%;
        margin-bottom: 0;
        height: 370px;

        .container-phone {
          height: 105%;
          max-width: 200px;
        }
      }
      .left-container {
        width: 49.5%;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name {
          h1 {
            font-size: 30px;
          }
          span {
            font-size: 22px;
          }
        }
        p {
          font-size: 17px;
          line-height: 32px;
          padding: 0;
          padding-right: 30px;
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.smallDesktop}) {
    margin: 7em auto 0;

    max-width: 1100px;
    .container {
      margin-bottom: 4em;
      .right-container {
        .container-phone {
          width: 65%;

          height: 450px;
          max-width: 230px;
        }
      }
      .left-container {
        padding-right: 30px;

        .name {
          h1 {
            font-size: 38px;
          }
          span {
            font-size: 25px;
          }
        }
        p {
          font-size: 20px;
          line-height: 38px;
          padding: 0;
        }
      }
      .right-container {
        display: flex;
        align-items: center;
        img {
          height: 80%;
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    max-width: 1400px;
    .container {
      margin-bottom: 11em;
      margin-top: 11em;
      .right-container {
        width: 49.5%;
        height: 600px;
        max-height: 520px;
        .container-phone {
          width: 80%;

          height: 640px;
          max-width: 300px;
        }
      }
      .left-container {
        padding: 0;
        .name {
          margin-bottom: 30px;
          h1 {
            font-size: 45px;
            margin-bottom: 10px;
          }
          span {
            font-size: 30px;
          }
        }
        p {
          font-size: 28px;
          line-height: 45px;
          padding-right: 40px;
        }
      }
      .right-container {
        display: flex;
        align-items: center;
        img {
          height: 80%;
        }
      }
    }
  }
`;
