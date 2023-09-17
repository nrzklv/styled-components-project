import styled from "styled-components";
// import Animations from "../styles/animations/Animations";

const BtnComp = styled.h1 `
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #008b8b;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  user-select: none;
  transition: all 0.4s ease;

  &:hover {
    border: 1px #008b8b solid;
    color: #008b8b;
    background-color: #fff;
  }
  
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(5px)
  }
`

export default BtnComp