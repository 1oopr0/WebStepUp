import React from 'react';
import PropTypes from "prop-types";

const whoILike = [
  { 
    key : 1,
    name : "Sarah",
    value : 21
  },
  { 
    key : 2,
    name : "Dohun",
    value : 16},
  { 
    key : 3,
    name : "Kumho",
    value : 31
  },
  { 
    key : 4,
    name : "JiHye",
    value : 25
  },];

function Food({fav, age}){
  return (
  <div>
    <h2>I like {fav}</h2>
    <h4> 나이 : {age}</h4>
    </div>
  );
}


// proptypes 통해 이름이 다른지, 요소가 빠졌는지 형식이 다른지 체크할수 있다.
// isRequired는 있어야 하는 요소
// 자세한 내용은 React Doc에서 propTypes를 검색
Food.propTypes = {
  fav : PropTypes.string.isRequired,
  age : PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {whoILike.map(who => 
      <Food  
      key = {who.key} 
      fav = {who.name } 
      age = {who.value}/>)}
    </div>
  );
}

export default App;
