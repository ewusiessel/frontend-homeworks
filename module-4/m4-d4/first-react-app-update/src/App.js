import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/MyFooter';
import Jumbotron from './components/Jumbotron';
import MyNavbar from './components/MyNavbar';
import BookImages from "./components/LatestRelease";

function App() {
  return (
    <>
      <MyNavbar />
      <Jumbotron />
      <BookImages />
      <Footer />
    </>
  );
}

export default App;
