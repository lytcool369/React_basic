import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.header`
  font-size: 3rem;
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
  background-color: pink;
`;

const About = () => {
  return (
    <Container>
      <Header>소개</Header>
    </Container>
  );
};

export default About;
