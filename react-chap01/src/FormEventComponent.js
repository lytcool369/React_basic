import React, { useState } from "react";

const FormEventComponent = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;

  const _onChange = (e) => {
    const nextForm = {
      ...form, // ...: 원본 객체를 복사
      [e.target.name]: e.target.value, // e.target: 현재 내가 입력한 이벤트
    };

    console.log(nextForm);
    setForm(nextForm);
  };

  // 방법 1 (풀이)
  const _onClickCheck = () => {
    alert("이름: " + username + "\n메세지: " + message);

    const clearForm = {
      username: "",
      message: "",
    };

    setForm(clearForm);
    console.clear();
  };

  // 방법 2 (강사님)
  //   const _onClickCheck = () => {
  //     alert(`이름: ${username} \n메세지: ${message}`);

  //     setForm({
  //       username: "",
  //       message: "",
  //     });

  //     console.clear();
  //   };

  return (
    <div>
      <h1>자바스크립트 객체 state, 이벤트 연습</h1>
      <input
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={_onChange}
      />
      <input
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={_onChange}
      />
      <button onClick={_onClickCheck}>확인</button>
    </div>
  );
};

export default FormEventComponent;
