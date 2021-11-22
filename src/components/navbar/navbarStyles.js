import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 999;
  color: var(--color-text);
  background-color: var(--color-bg);
  p {
    font-size: 20px;
    line-height: 18px;
  }

  .container {
    box-shadow: 2px -4px 6px rgb(0 0 0 / 25%);
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
    position: relative;

    .menu {
      position: fixed;
      bottom: -100%;
      left: 0;
      width: 100%;
      background-color: var(--color-bg);

      transition: 0.2s ease;

      ul {
        background-color: var(--color-bg);

        list-style: none;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 100%;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        padding: 1rem 0 60px;
        li {
          a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            padding: 1rem 20px;

            svg {
              font-size: 1.5rem;
              margin-bottom: 10px;
              cursor: pointer;
              color: var(--color-text);
            }
            span {
              font-weight: 500;
            }
            :hover {
              svg,
              span {
                color: var(--primary-color);
              }
            }
          }
        }
      }
    }
    .icons {
      svg {
        font-size: 1.7rem;
      }
    }

    &.activo {
      .menu {
        bottom: 0;
        transition: 0.2s ease;
        ul {
          box-shadow: 2px -4px 6px rgb(0 0 0 / 25%);
        }
      }
    }
  }

  .icons {
    display: flex;
    align-items: center;
    svg:first-child {
      margin-right: 30px;
    }
    svg {
      cursor: pointer;
      &.close {
        z-index: 999;
      }
      :hover {
        color: var(--primary-color);
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.smallDesktop}) {
    transition: 0.1s ease;
    top: 0;
    left: 0;

    &.scroll {
      box-shadow: 1px -1px 8px 1px #989898;
      transition: 0.1s ease;
    }

    p {
      font-size: 23px;
    }

    .container {
      &.activo {
        .menu {
          ul {
            box-shadow: none;
          }
        }
      }
      padding: 0 2.5em;
      .menu {
        background-color: transparent;
        width: auto;
        position: relative;
        bottom: 0;
        transition: none;
        ul {
          background-color: inherit;
          display: flex;
          padding: 0;
          li {
            margin: 0 15px;
            a {
              display: block;
              padding: 0;
              svg {
                margin: 0;
                display: none;
              }
              span {
                font-size: 18px;
              }
            }
          }
        }
      }
    }

    .icons {
      display: block;
      width: auto;
      svg {
        font-size: 1.7rem;
      }
      svg:first-child {
        margin: 0;
      }
      svg:last-child {
        display: none;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    height: 65px;
    p {
      font-size: 26px;
    }
    .container {
      max-width: 1500px;
      margin: 0 auto;
      box-shadow: none;
      .menu {
        ul {
          li {
            a {
              span {
                font-size: 22px;
              }
            }
          }
        }
      }
    }
    .icons {
      svg:first-child {
        font-size: 5rem;
      }
    }
  }
`;
