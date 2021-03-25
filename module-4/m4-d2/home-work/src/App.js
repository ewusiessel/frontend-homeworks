import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyCustomContent from "./components/MyContent.jsx";

const App = () => {
  return (
    <div>
      <NavBar title="Book Store" />
      <MyCustomContent />
      <MyFooter />
    </div>
  );
};

export default App;
