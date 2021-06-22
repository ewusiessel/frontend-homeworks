import {Component} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class DisplayAlbums extends Component {

    state = {
        gallery: []

    }


    componentDidMount = async () => {
        console.log("fetching data")
        try {
            let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=search", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "e231654c7bmshc8457f88c6def78p1ccaa2jsnf9f1cf1ca0b5",
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                    }
                }
            )
            console.log(response)

            if (response.ok) {
                let data = await response.json()
                console.log(data)
                let sample = data.Search.slice(0,6)
                this.setState({gallery: sample})
                console.log(sample)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // componentDidUpdate = async (prevProps) => {
    //     console.log("fetching data")
    //     try {
    //         let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=dido", {
    //                 "method": "GET",
    //                 "headers": {
    //                     "x-rapidapi-key": "e231654c7bmshc8457f88c6def78p1ccaa2jsnf9f1cf1ca0b5",
    //                     "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
    //                 }
    //             }
    //         )
    //
    //         if (response.ok) {
    //             let data = await response.json()
    //             let last6 = data.Search.slice(-6)
    //             if (prevProps.search !== this.props.search) {
    //                 this.setState({gallery: last6})
    //             }
    //             console.log(last6)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    render() {
        console.log("fetching albums")

        return (
            <Container className="my-5">
                <h5 className="text-white">{this.props.galleryTitle}</h5>
                <Row>
                    {this.state.gallery.map((album) => {
                        return (
                            <Col xs={2}>
                                <link to={`details/${album.id}`}>
                                    <img src={album.cover} className="img-fluid" />
                                </link>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default DisplayAlbums
