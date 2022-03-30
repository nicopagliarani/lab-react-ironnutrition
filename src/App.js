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
  const [filter, setFilter] = useState("");
  
  
  const addFood = (newFood) => {

    const updatedFoodList = [...allFoods, newFood];
    setAllFoods(updatedFoodList);
    setDisplayList(updatedFoodList);
    }

    const filterFoods = (filter) => {
      setFilter(filter);
    }
    const changeFood = (index) => (update) => {
      const updatedFood = allFoods.map((food, current) => {
        if (index === current) {
          return { ...food, ...update };
        }
        return food;
      });
      setAllFoods(updatedFood);
    };
    const toFoodComponent = (food, index) => {
      return (
        <FoodBox
          key={food.name}
          food={food}
          changeFood={changeFood(index)}
        />
      );
    };
    const handleFilterUpdate = (e) => {
      setFilter(e.target.value);
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
      <h1>Add your Food</h1>
      <AddFoodForm addFood={addFood}/>
      </div>
      <div>
      <h1>Search your Food</h1>
      Search: <input value={filter} onChange={handleFilterUpdate} />
      {filter === "" ? allFoods.map(toFoodComponent) : allFoods.filter((food) => {
        const lowerFilter = filter.toLowerCase();
        return (
          food.name.toLowerCase().includes(lowerFilter)
        );
      }).map(toFoodComponent)}
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
