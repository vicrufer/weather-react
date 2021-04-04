import Search from "./Search";
import City from "./City";
import Date from "./Date";
import Description from "./Description";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import Wind from "./Wind";
import './App.css';

function App() {
  return (
    <div className="App">
    <div class="container">
      <h2>Have a nice day!</h2>
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <Search />
          <div class="overview">
            <City />
            <ul>
              <Date day="Wednesday" time="18:43" />

              <Description />
            </ul>
          </div>
          <div class="weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/cloudy.png"
              alt=""
              id="icon"
            />

            <Temperature value="19" />
          </div>
          <div class="row info">
            <Humidity value="80" />
            <Wind value="10" />
          </div>
        </div>
      </div>
    </div>
    <p>
      <a href="https://github.com/vicrufer/weather-react" target="_blank" class="github">
      Open-source</a> code by Victoria Ruiz</p>
  </div>
  );
}

export default App;
