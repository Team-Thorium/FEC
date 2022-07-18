import React from 'react';
import styled from 'styled-components';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import QuestionAnswer from './questionsAnswers/QuestionAnswers';
import RelatedItems from './related-items/related-items.jsx';
import Overview from './product-details/Overview.jsx';
import { CurrentProductProvider } from './context.jsx';
//import nixatelier from './nixatelier.png';

function App() {
  const refresh = () => {
    window.location.reload();
  };

  return (
    <MainDiv>
      <CurrentProductProvider>

        <TitleDiv>
          <TitleImg
            src="public/icons/nixatelier.png"
            alt="nixatelier"
            onClick={refresh}
          />
          <Link href="https://github.com/rfe-nixos/FEC">
            <TitleInner>ABOUT</TitleInner>
          </Link>
        </TitleDiv>
        <Overview />
        <RelatedItems />
        <QuestionAnswer productId={37311} />
        <RatingsReviews productId={37311} />
      </CurrentProductProvider>
    </MainDiv>
  );
}

const Link = styled.a`
  &:link { text-decoration: none; }
  &:visited { text-decoration: none; }
  &:hover { cursor: pointer; opacity: 60%;}
  &:active { text-decoration: none; }
  margin-right: 5%;
`;

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;

const TitleImg = styled.img`
  position: absolute;
  left: 50%;
  max-height: 30px;
  size: auto;
  align-self: center;
  transform: translate(-50%, 0%);
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;

const TitleInner = styled.div`
  font-size: 10px;
  margin-right: 10%;
`;

const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  max-height: 5%;
  font-weight: 200;
  padding: 1%;
  font-size: 30px;
  letter-spacing: 5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  /* border-bottom: .5px solid black; */
  margin-bottom: 1%;
`;

export default App;
