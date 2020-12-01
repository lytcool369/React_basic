import React, { useState } from "react";

const IterationObjectComponent = () => {
  const [names, setNames] = useState([
    { id: 1, text: "별" },
    { id: 2, text: "달" },
    { id: 3, text: "은하수" },
    { id: 4, text: "별똥별" },
  ]);

  const [inputText, setInputText] = useState("");
  const [selectId, setSelectId] = useState("");
  const [modifyText, setModifyText] = useState("");
  const [nextId, setNextId] = useState(5);

  // 입력했을 때 inputText에 값 집어 넣기
  const _handleInputTextChange = (e) => setInputText(e.target.value);
  const _handleSelectId = (e) => setSelectId(e.target.value);
  const _handleModifyText = (e) => setModifyText(e.target.value);

  // 추가 버튼 클릭 했을 때
  const _handleAddButtonClick = () => {
    // 원본을 복사 -> 원소를 추가 -> 기존 State에 덮어씀
    // push, concat
    // push: 원본 배열의 제일 뒤에 원소를 추가한다.
    // concat: 제일 뒤에 원소를 추가한 배열을 새로 만든다.
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });

    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const _handleModifyItem = () => {
    // 방법 1. 해당 배열을 처음부터 다시 작성한다.
    // let modifyNames = new Array();

    // for (let i = 0; i < names.length; i++) {
    //   if (names[i].id != selectId) {
    //     modifyNames[i] = names[i];
    //   } else {
    //     modifyNames[i] = {
    //       id: selectId,
    //       text: modifyText,
    //     };
    //   }
    // }

    // 방법2. 해당 ID의 인덱스 값을 검사하여, 원본 배열에서 해당 인덱스의 값만 바꾼다.
    const modifyIndex = names.findIndex(
      (name) => name.id === parseInt(selectId)
    );
    names[modifyIndex].text = modifyText;

    // setNames(modifyNames);
    setNames(names);
    setSelectId("");
    setModifyText("");
  };

  const _handleRemoveItem = (id) => {
    // ex) 1번을 삭제하고 싶다 -> 1번빼고 다 살림
    const deleteNames = names.filter((param) => param.id !== id);
    setNames(deleteNames);
    // console.log(deleteNames);
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={_handleInputTextChange}
          value={inputText}
        />
        <button onClick={_handleAddButtonClick}>추가</button>
      </div>
      <div>
        <input
          type="text"
          size="1"
          onChange={_handleSelectId}
          value={selectId}
        />
        <input type="text" onChange={_handleModifyText} value={modifyText} />
        <button onClick={_handleModifyItem}>수정</button>
      </div>
      <div>
        <ul>
          {names.map((name) => (
            <li key={name.id} onDoubleClick={() => _handleRemoveItem(name.id)}>
              {name.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default IterationObjectComponent;
