import logo from './logo.svg';
import React, {useState,useEffect} from 'react'
import './App.css';
import Country from './components/country/Country';
import Cart from './components/cart/Cart';
import Profile from './components/profile/Profile';
import Friend from './components/friends/Friend';


function App() {
  const [countries, setCountry] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountry(data))
  },[])

  const handleCountry = (country) => {
    const newCart = [...cart, country]
    setCart(newCart)
  }


  
  return (
    <div className="App">
      <Friend></Friend>

      {/* <Profile></Profile>
      <h1>Total country: {countries.length}</h1>    
      <Cart cartDetails={cart}></Cart>

      <div className="flex">
        {
          countries.map(country => <Country countryDetails = {country} addCountry = {handleCountry}></Country>)
        }
      </div> */}
      

    </div>
  );
}

export default App;

