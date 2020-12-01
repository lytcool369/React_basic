// useInputs의 목적
//  input 태그가 변경 될 때 변경되는 내용을 감지
// reducer를 통한 상태 관리

import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // onChange(변경 감지) 이벤트 만들기
  const onChange = (e) => {
    dispatch(e.target);
  };

  return [state, onChange];
}
