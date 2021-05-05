import React from "react"
import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MovieGallery from "./components/MovieGallery"

class App extends React.Component {
  state = {
    query: "",
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value })
  }

  render() {
    let query = this.state.query
    console.log(query)
    return (
      <>
        <Header handleChange={this.handleChange} query={this.state.query} />
        {this.state.query.length > 0 && (
          <MovieGallery search={query} galleryTitle="Search Results" />
        )}

        {!this.state.query.length > 0 && (
          <>
            <MovieGallery search="harry potter" galleryTitle="Harry Potter" />
            <MovieGallery search="superman" galleryTitle="Superman" />
            <MovieGallery search="batman" galleryTitle="Batman" />
          </>
        )}
        <Footer />
      </>
    )
  }
}

export default App
