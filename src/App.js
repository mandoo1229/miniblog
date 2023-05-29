/* eslint-disable */
import './App.css';
import { useState } from'react';

function App() {
  const todayTime = () => {
    let date = new Date();
    let todayYear = date.getFullYear();
    let todayMonth = date.getMonth() + 1;
    let todayDate = date.getDate();

    return todayYear + '.' + todayMonth + '.'  + todayDate ;
  }

  const [a, b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  const [modal, setModal] = useState(false);
  const [good, setGood] = useState(0);
  const [title, setTitle] = useState(0);
  const [min, setMin] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Mini Blog</h4>
      </div>

      {
        a.map(function(q, w){
          return (
            <div className='list' key={w}>
            <h4 onClick={()=> { setModal(true); setTitle(w) }}>{ a[w] }
            <span onClick={(e)=> { e.stopPropagation(); setGood(good + 1)}}>👍🏻</span> { good }
            </h4>
            <span>{ todayTime() }</span>
            <button onClick={()=>{
              const copy = [...a];
              copy.splice(0,1);
              b(copy);
            }}>삭제</button>
          </div>
          )
        })
      }
      <input onChange={(e)=> { 
        setMin(e.target.value);
        }} />

        <button onClick={()=> {
          const copy = [...a];
          copy.unshift(min);
          b(copy)
          }}>글 발행</button>

      {
        modal == true ? <Modal title={title} b={b} a={a}/> : null
      }
    </div>
  );
}

function Modal(props) {
  const todayTime = () => {
    let date = new Date();
    let todayYear = date.getFullYear();
    let todayMonth = date.getMonth() + 1;
    let todayDate = date.getDate();

    return todayYear + '.' + todayMonth + '.'  + todayDate ;
  }
  return(
    <div className="modal">
      <h4>{props.a[props.title]}</h4>
      <p>{ todayTime()}</p>
      <p>상세내용</p>
      <button onClick={()=> { props.b (['여자코트 추천', '강남 우동 맛집', '파이썬 독학'])}}>글수정</button>
    </div>
  )
}

export default App;
