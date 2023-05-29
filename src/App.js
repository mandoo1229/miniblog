/* eslint-disable */
import './App.css';
import { useState } from'react';

function App() {

  const today = '5월 28일';
  const [a, b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  const [good, setGood] = useState('');

  function good1() {
    console.log(1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Mini Blog</h4>
      </div>
      <button 
      onClick={()=> {
        const copy = [...a];
        copy[0] = '여자 코트 추천';
        b(copy);
      }}
      >글수정</button>
      <div>
        <div className="list">
          <h4>{ a[0] } <span onClick={() => {setGood( good + 1)}}>👍🏻</span> {good}</h4>
          <p>{ today }</p>
        </div>
        <div className='list'>
          <h4>{ a[1] }</h4>
          <p>{ today }</p>
        </div>
        <div className='list'>
          <h4>{ a[2] }</h4>
          <p>{ today }</p>
        </div>
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
