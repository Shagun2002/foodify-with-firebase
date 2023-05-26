import mealsImage from '../../assests/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import logo from '../../assests/logo.png';


const Header =(props)=>{
return (
    <>
    <header className={classes.header}>
        <img className={classes.logo} src={logo} alt='website logo'/>
        <h1> The Foodify</h1>
        <HeaderCartButton onClick={props.onShowCart} />
    </header>

    <div className={classes['main-image']}>
     <img src={mealsImage} alt='A table full of foods' />
    </div>
    </>

)
}
export default Header;