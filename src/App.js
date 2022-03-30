import './App.css';
import 'antd/dist/antd.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import {useState} from 'react';
import FoodBox from './components/Foodbox'
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [allFoods,setAllFoods]= useState(foods)
  const [displayList, setDisplayList] = useState(foods)

  const addFood = (newFood) => {

    const updatedFoodList = [...allFoods, newFood];
    setAllFoods(updatedFoodList);
    setDisplayList(updatedFoodList);

}
  return (
    <div className="App">
      <AddFoodForm addFood={addFood}/>
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
