import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border-radius: 15px;
  border: none;
  padding: ${(props) => (props.padding ? props.padding : "15px 20px")};
  background-color: var(--primary-color);
  width: fit-content;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${(props) => (props.direction ? props.direction : "row")};

    span {
      font-weight: 600;
      font-size: ${(props) => (props.font ? props.font : "18px")};
      color: #fff;
      margin: ${(props) => (props.margin ? props.margin : "0 10px 0 0")};
    }
    svg {
      font-size: 25px;
      color: #fff;
    }
  }
`;

export const SectionTitle = styled.h2`
  color: var(--color-text);
  text-align: center;
  margin-bottom: 1em;
  font-size: 28px;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    font-size: 30px;
  }
  @media (min-width: ${({ theme }) => theme.smallDesktop}) {
    font-size: 35px;
  }
`;

export const ContainerImagePrev = styled.img`
  width: 100%;
  height: 100%;
  background-color: grey;
`;
