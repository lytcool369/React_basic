import React, { useEffect, useState } from "react";

//useState 및 useEffect에 대한 설명

const UseStateComponent = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const _handleChangeName = (e) => {
    setName(e.target.value);
  };

  const _handleChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  // useEffect Hooks : 렌더링이 되는 시점을 정의할 수 있다.
  //                    특정 값이 변화 하거나, 마운트 되는 시점을 직접 설정할 수 있다.

  //   useEffect(() => {
  //     console.log("========렌더링 됩니까?=========", { name, nickname });
  //   });

  // 마운트가 되고 나서 실행해야 할 코드
  useEffect(() => {
    console.log("마운트가 되고 나서 실행되는 코드 입니다.");
  }, []); // [] : dependency list

  useEffect(() => {
    console.log("name이 변경 될 때만 실행됩니다.", name);
  }, [name]);

  // 언마운트가 되는 순간에 실행되어야할 코드
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("컴포넌트가 언마운트 또는 업데이트 되기 직전에 실행된다.");
      console.log("cleanup");
      console.log(name);
    };
  }, []);

  return (
    <div>
      <div>
        <input value={name} onChange={_handleChangeName} />
        <input value={nickname} onChange={_handleChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default UseStateComponent;
