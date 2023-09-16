import styled from "styled-components";
// import Animations from "../styles/animations/Animations";

const BtnComp = styled.h1 `
  cursor: pointer;
  color: darkcyan;
  border: 2px darkcyan solid;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.4s ease;

  &:hover {
    color: #fff;
    background-color: darkcyan;
  }
`

export default BtnComp