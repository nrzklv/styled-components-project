import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <Box>
                <Title>Hello World</Title>
                <GitHub href={"https://github.com/nrzklv"} target={"_blank"}>GitHub Account</GitHub>
                <GitHubProject href={"https://github.com/nrzklv/IT-Kamasutra.git"} target={"_blank"}>GitHub Project</GitHubProject>
                <CRA href={"https://create-react-app.dev/docs/adding-typescript/"} target={"_blank"}>Create React App</CRA>
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

const Title = styled.h1 `
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: darkorange;
  }
`

const GitHub = styled.a `
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: darkorange;
  }
`

const GitHubProject = styled(GitHub) `
  color: #fff;
`

const CRA = styled(GitHubProject) `
color: #fff;
`


