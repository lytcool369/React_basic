import { Route, Link, Switch, withRouter } from "react-router-dom";
import styled from "styled-components";
import About from "./components/About";
import Home from "./components/Home";
import Profiles from "./components/Profiles";
import GlobalStyles from "./GlobalStyles";

// 올바른 방법은 아님. App.js 에 전부 적는것이 아니라, 새로운 파일 생성을 추천
const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px; // padding: 안쪽 거리  <-> margin: 바깥쪽 거리
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  text-align: center;
  height: 50px;

  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "reansparent")};

  transition: border-bottom 0.5s ease-in-out;
`;

// styled-components를 이용해서 스타일링 시, 기존 컴포넌트를 상속한 형태로 스타일링
// 괄호를 치게 되면 상속이 된다. = 기존에 있던 스타일을 가져온다.
const StyledLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  // withRouter를 사용하지 않으면, components가 바뀔때 Re랜더링 되지 않는것이 확인된다.
  // console.log(window.location.pathname);  // 현재 찍혀있는 URL 확인

  return (
    <>
      <GlobalStyles />

      <Header>
        <List>
          <Item current={window.location.pathname === "/"}>
            <StyledLink to="/">홈</StyledLink>
          </Item>
          <Item current={window.location.pathname === "/about"}>
            <StyledLink to="/about">소개</StyledLink>
          </Item>
          <Item current={window.location.pathname === "/profiles"}>
            <StyledLink to="/profiles">프로필</StyledLink>
          </Item>
        </List>
      </Header>

      {/* Switch: 여러 개의 컴포넌트 중 하나의 컴포넌트만 화면에 띄워주는 역할 */}
      <Switch>
        {/* exact: URL의 시작 부분을 설정 */}
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
      </Switch>
    </>
  );
}

export default withRouter(App); // withRouter: router가 바뀔 때마다 Re랜더링
