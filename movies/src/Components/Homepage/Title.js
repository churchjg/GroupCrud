import React, { Component } from 'react'
import Sidebar from './SideBar'
import { Col, Row, Container } from 'react-bootstrap'
//import axios from 'axios';


//let url = "https://mernmovies.herokuapp.com"


export class Title extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     listName: this.props.listName,
        //     movies: []
        // }
    }

    // async getMovies() {
    //     console.log("search")
    //     const data = await axios(`${url}/api/movies`)
    //     console.log(data);
    // }

    // async loadLists() {
    //     const data = await axios("https://mernmovies.herokuapp.com");
    //     console.log(data.data.data);
    //     this.setState({ lists: data.data.data });
    //}
    // loadList(i) {
    //     this.setState({ current: this.state.lists[i] })
    // }

    // fetchMovies = () => {
    //     fetch(`${url}/api/movies`)
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log(res)
    //             this.setState({
    //                 ready: true
    //                 , movies: res.data.data
    //             })
    //         })

    // }

    // componentDidMount = () => {
    //     this.getMovies()
    // }


    render() {
        console.log("we are in title",this.props);
        return (
            <Container>

                <div style={{ width: "120%", height: "100vh", color: "red", paddingTop: 10, backgroundColor: "#D3D3D3", textAlign: "center", border: ".5px dotted black" }}><h1>MOVIE.INC</h1>
                    <Row style={{ height: "60%", width: "85%", marginTop: 15, color: "black", textAlign: "center" }} noGutters >
                        <Col xs="3" style={{ marginTop: 5, border: "5px solid red", textAlign: "center" }}>
                            <Sidebar selectList={this.selectList} />
                        </Col>
                        {
                    this.props.movies.map((movie) =>
                    <Col>
                        <div style={{ textAlign: "center" }}>
                            <ul style={{ listStyle: "none", fontSize: "20px", paddingTop: 20, paddingBottom: 20 }}>
                                <h2>Some Great Movies:</h2>
                              {movie.Title}
                            </ul>
                        </div>
                    </Col>
                    )
                }
                    </Row>
                </div>
            </Container>
        )
    }
}

export default Title
