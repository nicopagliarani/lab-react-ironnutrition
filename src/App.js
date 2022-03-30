import './App.css';
import 'antd/dist/antd.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import {useState} from 'react';
import FoodBox from './components/Foodbox'
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [allFoods,setAllFoods]= useState(foods)
  const [displayList, setDisplayList] = useState(foods)
  const [filter, setFilter] = useState("");
  
  
  const addFood = (newFood) => {

    const updatedFoodList = [...allFoods, newFood];
    setAllFoods(updatedFoodList);
    setDisplayList(updatedFoodList);
    }

    const filterFoods = (filter) => {
      setFilter(filter);
    }
    const deleteFoods = (foodName) => {
      const filteredFood = allFoods.filter((food) => {
        return food.name !== foodName;
      });
      setDisplayList(filteredFood);
      setAllFoods(filteredFood);
    };
    
  return (
    <div className="App">
      <div>
      <h1>Search your Food</h1>
      <Search filterFoods={filterFoods} />
      </div>
      <div>
      <h1>Add your Food</h1>
      <AddFoodForm addFood={addFood}/>
      </div>
      
      
      
      <h1>Food List</h1>
      {allFoods.map((food)=>{
        return(<div>
          <FoodBox food={food} deleteFood={deleteFoods}/>
         </div>)
      })
    }
    
      </div>
  );
}

export default App;
