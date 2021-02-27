import logo from './logo.svg';
import React, {useState,useEffect} from 'react'
import './App.css';
import Country from './components/country/Country';
import Cart from './components/cart/Cart';
import Profile from './components/profile/Profile';


function App() {
  const [countries, setCountry] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountry(data))
  },[])

  const handleCountry = (country) => {
    const newCart = [...cart, setCart]
    setCart(newCart)
  }

  const obj = (
    <div>
      <h1>hello</h1>
      <h1>hi</h1>
    </div>
  )
  
  return (
    <div className="App">

      <Profile></Profile>
      <h1>Total country: {countries.length}</h1>    
      <Cart cartDetails={cart}></Cart>

      <div className="flex">
        {
          countries.map(country => <Country countryDetails = {country} addCountry = {handleCountry}></Country>)
        }
      </div>
      

    </div>
  );
}

export default App;

