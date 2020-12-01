// 방법 1
// import React from "react";

// const PropsComponent = (props) => {
//   console.log("방법 1");
//   return (
//     <>
//       <ul>
//         <li>이름: {props.name}</li>
//         <li>나이: {props.age}</li>
//       </ul>
//     </>
//   );
// };

// export default PropsComponent;

// 방법 2
// import React from "react";

// const PropsComponent = (props) => {
//   console.log("방법 2");
//   const { name, age } = props;
//   return (
//     <>
//       <ul>
//         <li>이름: {name}</li>
//         <li>나이: {age}</li>
//       </ul>
//     </>
//   );
// };

// export default PropsComponent;

// 방법 3
// 주의할 점
//   부모 컴포넌트에서 넘기는 key값과, 변수로 사용할 변수명이 똑같아야 한다.
//   ex) 부모에서 {name:"abc", age:10} -> 자식에서는 ({name, age})
import React from "react";

const PropsComponent = ({ name, age }) => {
  console.log("방법 3");
  return (
    <>
      <ul>
        <li>이름: {name}</li>
        <li>나이: {age}</li>
      </ul>
    </>
  );
};

export default PropsComponent;
