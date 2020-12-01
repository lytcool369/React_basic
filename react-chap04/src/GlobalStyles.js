// styled-components를 사용함에 있어, 기본적인 테마를 설정하는 방법
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};   // 이것에 의해 모든 html의 style이 사라지게 된다.
    a {
        text-decoration:none;
        color:inherit;  // 상속, 부모의 컬러를 그대로 들고와 쓴다.
    }

    * { 
        box-sizing: border-box;
    }

    body {
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        background-color:rgba(20,20,20,1);
        color:white;
        padding-top:50px
    }
`;

export default globalStyles;
