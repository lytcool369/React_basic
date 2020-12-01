import React, { useState } from "react";

const SayComponent = () => {
  // useState(initialState)
  //   * initialState: 최초의 상태가 가지고 있어야 할 값

  const [message, setMessage] = useState("버튼을 선택해 주세요");
  const [color, setColor] = useState("black");

  const onClickEnter = () => {
    setMessage("어서오십쇼");
  };

  const onClickLeave = () => {
    setMessage("잘가요~");
  };

  const onClickChangeRed = () => {
    setColor("red");
  };
  const onClickChangeGreen = () => {
    setColor("green");
  };
  //   const onClickChangeBlue = () => {
  //     setColor("blue");
  //   };

  return (
    <>
      <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        {/* color: color -> {color} (O) */}
        {/* color: gamja -> {gamja} (X) */}

        <h1 style={{ color }}>{message}</h1>

        <button onClick={onClickChangeRed}>빨간색</button>
        <button onClick={onClickChangeGreen}>초록색</button>
        <button
          onClick={() => {
            setColor("blue");
          }}
        >
          파란색
        </button>
      </div>
    </>
  );
};

export default SayComponent;
