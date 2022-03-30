import './App.css';
import 'antd/dist/antd.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import {useState} from 'react';
import FoodBox from './components/Foodbox'
import { OmitProps } from 'antd/lib/transfer/ListBody';

function App() {
  const [allFoods,setAllFoods]= useState(foods)
  return (
    <div className="App">
      <h1>Food List</h1>
      {allFoods.map((food)=>{
        return(<div>
          <FoodBox food={food}/>
         </div>)
      })
    }
    
      </div>
  );
}

export default App;
