import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './components/BookList'
import fantasyBooks from './fantasyBooks.json'
import RegistrationNavbar from "./components/RegistrationNavbar";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import RegistrationForm from "./components/RegistrationForm";

function App() {
    return (

        <div className="App">
            <header className="App-header">
                {/* <WarningSign text="Watch out again!" /> */}
                {/* <MyBadge text="NEW!!" color="info" /> */}
                {/* <SingleBook book={fantasyBooks[0]} /> */}
                <RegistrationNavbar/>
                <Router>
                    <Route path="/" exact component={RegistrationForm} />
                </Router>
                <BookList books={fantasyBooks}/>
            </header>
        </div>

    )
}

export default App
