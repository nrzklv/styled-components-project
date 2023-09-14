import React from 'react';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
        <Box>
            <StyledBtn>
                Hello World
            </StyledBtn>
        </Box>
    </div>
  );
}

export default App;

const StyledBtn = styled.button `
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: darkcyan;
  font-size: 3rem;
  font-weight: bold;
`

const Box = styled.div `
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

