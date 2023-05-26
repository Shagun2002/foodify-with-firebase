import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import Card from '../UI/Card';
import delivery from '../../assests/delivery.png';

const Meals = () => {
  return (
    <>
      <MealsSummary />
      {/* <Card>
        <h2>The Foodify brings you fastest delivery </h2>
        <span><img src={delivery} alt='delivery '/></span>
        <div className='col'> Fastest</div>
      </Card> */}
      <AvailableMeals />
    </>
  );
};

export default Meals;

