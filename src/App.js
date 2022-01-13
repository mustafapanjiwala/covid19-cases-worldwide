import "./styles/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Map from "./components/Map";

function App() {
  return (
    <div data-testid="main">
      <Map />
    </div>
  );
}

export default App;
