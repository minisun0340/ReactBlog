/* eslint-disable */ //Lint 끄는 기능-warning 메시지 제거

import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트추천', '우동맛집', '여긴어디']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [title, setTitle] = useState(0);
  let [modal, setModal] = useState([0,0,0]);
  let [입력값, 입력값변경] = useState('');


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순 정렬</button>

      {/* <div className='list'>
        <h4>{글제목[0]} <span onClick={ ()=>{따봉변경(따봉+1)} }>👍</span> 
        <span>❤️{따봉}</span>     
        <button onClick={ () => {
          let copy = [...글제목]; //...은 괄호를 벗겨주고 []새로 씌워주고 -> 화살표가 달라지는 새로운 array로 만듬
          copy[0] = '여자코트 추천';
          글제목변경(copy);
          } }>여자</button></h4>
        <p>2월 17일 발행</p>
      </div>
      
      <div className='list'>
        <h4 onClick={()=>{
          setModal(!modal);
        }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      

      {
        글제목.map((a, i)=>{
          return(
            <div className='list' key={i}>
              <h4 onClick={()=>{

                setModal(true);
                setTitle(i);
              }}>{글제목[i]}
                <span onClick={ (e)=>{
                e.stopPropagation();
                let 따봉copy = [...따봉];
                따봉copy[i] = 따봉copy[i]+1;
                따봉변경(따봉copy)} }>👍</span>
              <span>{따봉[i]}</span></h4> 

              <p>2월 17일 발행</p>
            </div>)
        })
      }

      <input onChange={(e)=>{
        입력값변경(e.target.value)}} type="text"></input>
      <button onClick={()=>{
        글제목.push(입력값);
        따봉.push(0);
        modal.push(0);
      }}>버튼</button>

      {
        modal == 1 ? <Modal title={title} color={'skyblue'} 글제목변경={글제목변경} 글제목={글제목}></Modal> :  null
      }

    </div>
  );
}

function Modal(props){
  
  return (
    <div className='modal' style={{background:props.color}}>
        <h4>{ props.글제목[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          let copy = [...props.글제목];
          copy[0] = '여자코트 추천좀';
          props.글제목변경(copy);
        }}  >글수정</button>
      </div>
  )
}



export default App;
