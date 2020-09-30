import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/box/Box';
import {useDispatch, useSelector} from "react-redux"

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)
  const increase = () => {
    dispatch({type:"INCREMENT"})
  }
  const decrease = () => {
    dispatch({type: "DECREMENT"})
    
  }

  const changeColor = (e) => {
    dispatch({type: "CHANGECOLOR", payload: e.target.value})
  }
  
  return (
    <div className="App">
      <h1>{count}</h1>
     <button onClick={() => increase()}>Increment</button>
     <button onClick={() => decrease()}>Decrement</button>
     <input type="text" onChange={(e) => changeColor(e)} />
     <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignContent:"center"}}>
     <Box count={count}/>
     </div>
    </div>
  );
}

export default App;
