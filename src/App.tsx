import React from 'react';
import './App.css';
import BtnComp from "./components/Button.styled";
import GitHubAcc from "./components/Link.styled";
import GitHubProject from "./components/GitHubProject.styled";
import CreateReactApp from "./components/CreateReactApp.styled";
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <Box>
                <BtnComp as="a" href={"#"}>Hello World</BtnComp>
                <GitHubAcc href={"https://github.com/nrzklv"} target={"_blank"}>GitHub Account</GitHubAcc>
                <GitHubProject href={"https://github.com/nrzklv/IT-Kamasutra.git"} target={"_blank"}>GitHub Project</GitHubProject>
                <CreateReactApp href={"https://create-react-app.dev/docs/adding-typescript/"} target={"_blank"}>Create React App</CreateReactApp>
            </Box>
        </div>
    );
}

export default App;

const Box = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  gap: 35px;
`