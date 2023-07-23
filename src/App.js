import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>   
    <div className="container">
        <div className="header">
        <div className="search-box">
            <input type="text" placeholder="enter your location" className="input-box"/>
            <button className="fa-solid fa-magnifying-glass" id="searchBtn"></button>
            </div>
        </div>
      <div className="Weather-body">
        <img src="/assets/clear.webp" alt="Weather image" className="Weather-img"/>
        <div className="Weather-body">
           <p className="temperature">0 <sup>°C</sup></p>
           <p className="description">weather condition </p>  
        </div>
        <div className="Weather-details">
          <div className="humidity"> 
            <i className="fa-sharp fa-solid fa-droplet"></i>
            <div  className="text">
              <span id="humidity">0%</span>
              <p>Humidity</p>
            </div>
          </div>
          <div className="wind"> 
            <i className=" fa-solid fa-wind"></i>
            <div  className="text">
              <span id="wind-speed">0km/H</span>
              <p>wind-speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div> 
  );
}

export default App;
