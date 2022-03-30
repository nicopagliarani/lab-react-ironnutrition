import './App.css';
import 'antd/dist/antd.css';
// import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import {useState} from 'react';

function App() {
  const [allFoods,setAllFoods]= useState(foods)
  return (
    <div className="App">
      <h1>Food List</h1>
      {allFoods.map((food)=>{
        return(<div>
          <h2> {food.name} </h2>
          <img src={food.image} alt="food" width={100} />
        </div>)
      })
    }
      </div>
  );
}

export default App;
