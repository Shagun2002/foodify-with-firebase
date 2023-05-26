import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-http-requests-api-default-rtdb.firebaseio.com/meals.json');
      const responseData = await response.json();
     
      if(!response.ok){
      throw new Error ('Something went wrong http error!')
     }
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error)=>{
      setIsLoading(false);
      setHttpError(error.message)
    });
  }, []);

  if(isLoading){
    return <section className={classes.MealsLoading}>
      <h3>Loading...</h3>
    </section>
  }
  if(httpError){
    return <section className={classes.MealsError}>
       <h3>{httpError}</h3>
    </section>
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
   
};

export default AvailableMeals;







