import styled from "styled-components";

export const FeaturedContainer = styled.div`
  margin-bottom: 3em;
  .feature-title {
    text-align: center;
    color: var(--color-text);
    margin-bottom: 10px;
  }
  .slider {
    width: 100%;
    display: flex;
    position: relative;
    height: 450px;
    max-width: 480px;
    margin: 0 auto;
    overflow: hidden;

    article {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      padding: 15px 0;
      transition: 0.2s ease-out;
      opacity: 0;

      &.activeSlide {
        opacity: 1;
        transform: translate(0);
      }

      &.nextSlide {
        transform: translateX(100%);
      }

      &.lastSlide {
        transform: translateX(-100%);
      }
    }
    .slider-button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 51%;
      border-radius: 50%;
      border: none;
      outline: none;
      svg {
        font-size: 2rem;
      }
      &.next {
        right: 0;
      }
      &.last {
        left: 0;
      }
      :hover {
        svg {
          color: var(--primary-color);
        }
      }
    }
  }
`;
