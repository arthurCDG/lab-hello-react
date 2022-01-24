import "./App.css";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import ironhackLogoXS from "./images/ironhackLogoXS.png";
import menuTopXS from "./images/menuTopXS.png";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={ironhackLogoXS} alt="fake" className="App-logo" />
        <img src={menuTopXS} alt="fake" className="App-link" />
      </div>
      <img src={icon1} alt="fake" />
      <img src={icon2} alt="fake" />
      <img src={icon3} alt="fake" />
      <img src={icon4} alt="fake" />
    </div>
  );
}
export default App;
