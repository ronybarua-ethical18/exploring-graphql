import './App.css';
import LayoutComponentOne from './Components/CustomHook/LayoutComponentOne'
import LayoutComponentTwo from './Components/CustomHook/LayoutComponentTwo'
import ClickCounter from './Components/HigherOrderComponent/ClickCounter'
import HoverCounter from './Components/HigherOrderComponent/HoverCounter'
function App() {
  return (
    <div className="App">
      {/* <LayoutComponentOne />
      <LayoutComponentTwo /> */}

      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
