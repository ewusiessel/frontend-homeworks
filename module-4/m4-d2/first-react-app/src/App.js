import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/MyFooter';
import Jumbotron from './components/Jumbotron';
import MyNavbar from './components/MyNavbar';

function App() {
  return (
    <>
      <MyNavbar />
      <Jumbotron />
      <Footer />
    </>
  );
}

export default App;
