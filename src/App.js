import React from 'react';
// import Orange from './Orange';

// function Fruit(props){
//   return (
//     <h1>{props.fav} 맛나요</h1>
//   )
// }

function Fruit({fav}) {
  return (<h1> {fav} 맛나요</h1>)
}


function App() {
  return (
  <div>
    <h1>헬로방가요</h1>
    <Fruit fav='banana' />
    <Fruit fav='mango' />
    <Fruit fav='banana' />
    <Fruit fav='banana' />
  </div>
  );
}

export default App;
