import React from 'react';

function Food({fav}){
  return <h1>I like {fav}</h1>
}

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

function renderWho(who) {
  return <Food key = {who.key} fav = {who.name }/>;
}

function App() {
  return (
    <div>
      {whoILike.map(renderWho)}
    </div>
  );
}

export default App;
