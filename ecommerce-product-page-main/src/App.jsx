
import './App.css'
import Navigation from "./Components/Navigation.jsx";
import Album from "./Components/Album.jsx";
import Info from "./Components/Info.jsx";

function App() {

  return (
    <>
      <Navigation />
      <div className="flexable ">
          <Album />
          <Info />
      </div>

    </>
  )
}

export default App
