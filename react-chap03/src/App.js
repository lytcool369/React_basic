import { useState } from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: ${(props) => (props.colorcode ? props.colorcode : "gray")};
  font-size: 3rem;
`;

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <AppContainer colorcode={color}>Hello</AppContainer>
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        빨
      </button>
      <button
        onClick={() => {
          setColor("green");
        }}
      >
        초
      </button>
      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        파
      </button>
    </>
  );
}

export default App;
