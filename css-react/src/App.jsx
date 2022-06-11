import './App.css';
import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import reset from "styled-reset";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

const Globalstyle = createGlobalStyle`
  ${reset}
`

const Menu = styled.div`
  width: 250px;
  background-color: skyblue;
  padding: 10px;
`

const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

const List = styled.li`
  font-size: 20px;
  color: red;
  margin: 10px;
  & a{
     text-decoration: none;
     color: inherit;
    }
`

const CardDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: ${(props) => (props.className === 'setting' ? '200px' : '400px')};
`;

function App() {
  return (
    <BrowserRouter>
      <div>
        <Globalstyle />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/detail' element={<Detail />}/>
          <Route exact path='/QnA' element={<QnA />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Navbar(){
  return(
    <Menu>
      <MenuList>
        <List><Link to='/'>Home</Link></List>
        <List><Link to='/detail'>Detail</Link></List>
        <List><Link to='/QnA'>QnA</Link></List>
      </MenuList>
    </Menu>
  )
}

function Home(){
  return(
    <div>home</div>
  )
}

function Detail(){
  return(
    <div>
      detail
      <Card cardClassName='setting' title='챌린지 설정'>
        <SettingCard />
      </Card>
      <Card cardClassName='share' title='서비스 공유하기'>
        <ShareCard />
      </Card>
    </div>
  )
}

function QnA(){
  return(
    <div>QnA</div>
  )
}

const Card = ({cardClassName, title, children}) => {
  return (
    <>
      <CardDiv className={cardClassName}>
        <h3>{title}</h3>
        <hr />
        <div>{children}</div>
      </CardDiv>
    </>
  );
};

function SettingCard(){
  return (
    <>
      <button>초기화</button>
      <button>저장하기</button>
    </>
  );
};

const ShareCard = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
        eveniet, laudantium, deleniti autem sequi molestias magni quia, aliquam
        et praesentium nostrum dolores culpa cupiditate unde doloremque labore
        beatae accusamus.
      </p>
      <div>
        <button>이미지 저장</button>
        <button>트위터</button>
        <button>페이스북</button>
      </div>
    </>
  );
};

export default App;
