import React from "react";
import styled from "styled-components";
import usePromise from "../lib/usePromise";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// 비동기 통신이 일어나는 컴포넌트
//  1) 비동기 통신이 일어나야 하는 타이밍 -> useEffect를 이용해 타이밍 정의 (의존성 리스트)
//  2) 데이터의 수신 상태 (로딩, 완료, 에러)

// https://newsapi.org/
// 에서 발급
const API_KEY = "536fa50ec1c0421583ca92919afb2282";

//  NewsPage에서 category를 전달하고, NewsList에서 받는다.
const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`
    );
  }, [category]);

  console.log("로딩 상태 : ", loading);
  console.log("응답 상태 : ", response);
  console.log("에러 상태 : ", error);
  console.log("-------------------");

  // 로딩중에 표시해줄 내용
  if (loading) {
    return <NewsListBlock>뉴스 로딩중...</NewsListBlock>;
  }

  // 응답된게 없으면 아무것도 표시 안함
  if (!response) {
    return null;
  }

  // 에러 발생시에는 에러 발생 메시지
  if (error) {
    return <NewsListBlock>에러 발생</NewsListBlock>;
  }

  console.log("여기까지 몇번옴?");
  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
