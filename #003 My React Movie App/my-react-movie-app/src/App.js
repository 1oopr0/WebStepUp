import React from 'react';

function Food({fav}){
  return <h1>I like {fav}</h1>
}

const whoILike = [
    { name : "Sarah",
    value : 21},
    { name : "Dohun",
    value : 16},
    { name : "Kumho",
    value : 31},
    { name : "JiHye",
    value : 25},];

function renderWho(who) {
  return <Food fav = {who.name }/>;
}

function App() {
  return (
    <div>
      {whoILike.map(renderWho)}
    </div>
  );
}

export default App;
