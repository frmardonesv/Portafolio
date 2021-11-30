import styled from "styled-components";

export const ProjectCardContainer = styled.article`
  margin: 0 auto;
  max-width: 480px;
  margin-bottom: 3em;
  text-align: center;
  .project-image {
    width: 100%;
    height: 200px;
    border-radius: 15px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .project-info {
    margin-top: 10px;
    h2 {
      position: relative;
      font-size: 25px;
      color: var(--color-text);
    }
    h2::after {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      content: "";
      width: 15%;
      height: 3px;
      background-color: var(--primary-color);
    }
    p {
      margin: 1em 0 1.5em;
      color: #3d3d3d;
      line-height: 30px;
      color: var(--color-subTitle);
    }
    .tecno {
      width: 100%;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      li {
        background-color: var(--primary-color);
        color: #fff;
        padding: 10px 30px;
        border-radius: 10px;
        font-size: 13px;
        margin-bottom: 20px;
        font-weight: 600;
        margin-right: 20px;
      }
      margin-bottom: 2em;
    }
    .project-links {
      display: flex;
      justify-content: space-evenly;
    }
  }
`;
