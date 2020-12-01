import React from "react";
import CounterComponent from "./CounterComponent";
import FormEventComponent from "./FormEventComponent";
import IterationObjectComponent from "./IterationObjectComponent";
import MyComponent from "./MyComponent";
import PropsComponent from "./PropsComponent";
import SayComponent from "./SayComponent";

function App() {
  return (
    // <></> (Fragment): 아무 태그도 들어있지 않은 선택자
    <>
      {/* <div>hello</div>
      <MyComponent />
      <PropsComponent name={"YunTaek Lim"} age={29} />
      <CounterComponent />
      <SayComponent />
      <FormEventComponent /> */}
      <IterationObjectComponent />
    </>
  );
}

export default App;
