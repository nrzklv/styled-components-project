import styled from "styled-components";

const BtnComp = styled.h1 `
  color: darkorange;
  background-color: black;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.4s ease;

  &:hover {
    color: black;
    background-color: darkorange;
  }
`

export default BtnComp