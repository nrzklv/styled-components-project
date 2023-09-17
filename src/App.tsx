import React from 'react';
import './App.css';
import BtnComp from "./components/Button.styled";
// import GitHubAcc from "./components/Link.styled";
// import GitHubProject from "./components/GitHubProject.styled";
// import CreateReactApp from "./components/CreateReactApp.styled";
import styled from "styled-components";

function App() {
    return (
        <div className="App">

            <Box>
                {/*<BtnComp color={"red"} fontSize={"3rem"}>Hello World</BtnComp>*/}
                {/*<BtnComp color={"black"}>Hello World</BtnComp>*/}
                {/*<BtnComp>Hello World</BtnComp>*/}

                <BtnComp btnType={"primary"} basic>Hello World</BtnComp>
                <BtnComp btnType={"secondary"} premium>Hello World</BtnComp>

            </Box>

        </div>
    );
}

export default App;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  height: 100vh;
  gap: 35px;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`