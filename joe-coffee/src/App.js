import {ReactComponent as JoeCoffeeLogo} from './JoeCoffee.svg';
import {ReactComponent as LoginIcon} from './login.svg';
import {ReactComponent as SearchIcon} from './searchLogo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="joe-coffee">
      <JoeCoffeeLogo />
    </div>
    <div title="shop" id="Shop">SHOP</div>
    <div title="workshop" id="workshop">WORKSHOP</div>
    <div title="discover" id="discover">DISCOVER</div>
    <div title="locations" id="locations">LOCATIONS</div>
    <div id="order">ORDER ONLINE</div>
    <LoginIcon className="loginicon"/>
    <SearchIcon title="Search"className="searchicon"/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTba5iEq6JbtalXdNnAiPn0a-uEaP77hZDg&usqp=CAU" />
    </>
  );
}


export default App;
