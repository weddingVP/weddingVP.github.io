import "./App.css";
import BannerComponent from "./component/BannerComponent";
import TimerComponent from "./component/TimerComponent";
import WeddingConvert from "./component/WeddingConvert";
import Place from "./component/Place";
import "./font/sweet.ttf";

function App() {
  return (
    <div className='App'>
      <BannerComponent />
      <TimerComponent />
      <WeddingConvert />
      <Place />
    </div>
  );
}

export default App;
