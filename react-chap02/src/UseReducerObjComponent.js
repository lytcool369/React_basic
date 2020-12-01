import React, { useReducer } from "react";

function reducer(state, action) {
  // 구현
  return {
    ...state,
    [action.name]: action.value,
  };
}

const UseReducerObjComponent = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  const _handleChange = (e) => {
    // 구현
    dispatch(e.target);
  };

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={_handleChange} />
        <input name="nickname" value={nickname} onChange={_handleChange} />
      </div>
      <div>
        <p>
          <b>이름 : </b> {name}
        </p>
        <p>
          <b>닉네임 : </b> {nickname}
        </p>
      </div>
    </div>
  );
};

export default UseReducerObjComponent;
