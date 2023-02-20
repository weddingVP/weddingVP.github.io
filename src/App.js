import "./App.css";
import BannerComponent from "./component/BannerComponent";
import TimerComponent from "./component/TimerComponent";
import "./font/sweet.ttf";

function App() {
  return (
    <div className='App'>
      <BannerComponent />
      <TimerComponent />
    </div>
  );
}

export default App;