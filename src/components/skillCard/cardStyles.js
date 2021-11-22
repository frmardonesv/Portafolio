import styled from "styled-components";

const heightMobile = 50;
const heightTablet = 60;
const heightSmallDesktop = 65;

export const SkillCardContainer = styled.article`
  margin-bottom: 2em;
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #dfdfdf;
    padding: 8px 10px;
    border-radius: 10px;
    color: var(--color-text);

    svg {
      font-size: 2rem;
      color: var(--primary-color);
    }
    .arrow {
      transition: 0.1s ease;
      cursor: pointer;
    }
    div {
      display: flex;
      align-items: center;
      h3 {
        font-size: 18px;
      }
      svg {
        font-size: 1.3rem;
        margin-right: 12px;
      }
    }
  }

  .content {
    overflow: hidden;
    height: 0;
    list-style: none;
    margin: 0 auto;
    width: 95%;
    transition: 0.2s ease;
    li {
      position: relative;
      font-weight: 400;
      margin-bottom: 20px;
      color: var(--color-text);
    }
    li::after {
      position: absolute;
      bottom: -5px;
      left: 0;
      content: "";
      width: 100%;
      height: 4px;
      border-radius: 10px;
      background-color: var(--primary-color);
    }
  }
  &.activo {
    .top-section {
      .arrow {
        transform: rotate(180deg);
        transition: 0.1s ease;
      }
    }
    .content {
      padding: 5px 10px;
      border: 1px solid #dfdfdf;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      border-top: none;
      height: ${(props) => props.items && `${props.items * heightMobile}px`};
      transition: 0.2s ease;
    }
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    width: 49.5%;
    .top-section {
      padding: 12px 15px;
      div {
        svg {
          font-size: 1.7rem;
        }
        h3 {
          font-size: 20px;
        }
      }
      .arrow {
        font-size: 2rem;
      }
    }
    .content {
      li {
        font-size: 21px;
        margin-bottom: 25px;
      }
    }
    &.activo {
      .content {
        padding: 10px 15px;
        height: ${(props) => props.items && `${props.items * heightTablet}px`};
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.smallDesktop}) {
    .top-section {
      padding: 18px;
      div {
        svg {
          font-size: 2rem;
        }
        h3 {
          font-size: 23px;
        }
      }
      .arrow {
        font-size: 2.5rem;
      }
    }
    .content {
      li {
        font-size: 21px;
        margin-bottom: 25px;
      }
    }
    &.activo {
      .content {
        padding: 15px;
        height: ${(props) =>
          props.items && `${props.items * heightSmallDesktop}px`};
        li {
          margin-bottom: 25px;
          font-size: 22px;
        }
      }
    }
  }
`;
