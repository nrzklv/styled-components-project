import styled, {css} from "styled-components";

type BtnCompPropsType = {
    color?: string
    fontSize?: string
    btnType?: "primary" | "secondary"
    basic?: boolean
    premium?: boolean
}

const BtnComp = styled.h1 <BtnCompPropsType> `
  padding: 15px 25px;
  font-size: ${props => props.fontSize || "2rem"};
  cursor: pointer;
  text-decoration: none;
  border-radius: 20px;
  box-shadow: 0 9px #999;
  user-select: none;
  box-sizing: border-box;
  transition: all 0.3s ease;
  
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(5px)
  }

  ${props => props.btnType === "primary" && css<BtnCompPropsType> `
    color: #fff;
    background-color: ${props => props.color || "#008b8b"};
    border: 2px solid ${props => props.color || "#008b8b"};

    &:hover {
      color: ${props => props.color || "#008b8b"};
      background-color: transparent;
      border: 2px solid ${props => props.color || "#008b8b"};
    }
  `}
  
  ${props => props.btnType === "secondary" && css <BtnCompPropsType> `
    color: ${props => props.color || "#008b8b"};
    background-color: transparent;
    border: 2px solid ${props => props.color || "#008b8b"};

    &:hover {
      color: #fff;
      background-color: ${props => props.color || "#008b8b"};
      border: 2px solid ${props => props.color || "#008b8b"};
    }
  `}

  ${props => props.basic && css<BtnCompPropsType>`
    &:active {
      cursor: not-allowed;
    }
  `}
  
   ${props => props.premium && css<BtnCompPropsType> `
   &:active {
     cursor: wait;
   }
   `}
`

export default BtnComp