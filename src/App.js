import MainSlider from "./components/slider/MainSlider";
import NavBar from "./components/NavBar";
import Community from "./components/community/Community";
import AboutUs from "./components/AboutUs";
import Wwp from "./components/Wwp";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainSlider />
      <Community />
      <AboutUs />
      <Wwp />
      <Counter />
    </div>
  );
}

export default App;
