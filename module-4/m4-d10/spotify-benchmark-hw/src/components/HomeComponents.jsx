import {Component} from 'react'
// import {Button} from "react-bootstrap";
import HomePageNav from "./HomePageNav";
import DisplayAlbums from "./DisplayAlbums";

class HomeComponents extends Component {

    state = {}


    render() {

        return (
            <div>
                <HomePageNav/>
                <DisplayAlbums />
            </div>
        )
    }
}

export default HomeComponents
