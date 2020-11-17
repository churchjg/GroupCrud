import React, { Component } from 'react'
import Sidebar from './SideBar'
import { Col, Row, Container } from 'react-bootstrap'


let url = "https://mernmovies.herokuapp.com/api/collections"


export class Title extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listName: this.props.listName
            , movies: []
        }
    }


    fetchMovies = () => {
        fetch(`${url}/api/movies`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({
                    ready: true
                    , movies: res
                })
            })

    }



    componentDidMount = () => {
        this.fetchMovies()
    }


    render() {
        return (
            <Container>

                <div style={{ width: "120%", height: "100vh", color: "red", paddingTop: 10, backgroundColor: "#D3D3D3", textAlign: "center", border: ".5px dotted black" }}><h1>MOVIE.INC</h1>
                    <Row style={{ height: "60%", width: "85%", marginTop: 15, color: "black", textAlign: "center" }} noGutters >
                        <Col xs="3" style={{ marginTop: 5, border: "5px solid red", textAlign: "center" }}>
                            <Sidebar selectList={this.selectList} />
                        </Col>
                        <Col>
                            <div style={{ textAlign: "center" }}>
                                <ul style={{ listStyle: "none", fontSize: "20px", paddingTop: 20, paddingBottom: 20 }}>
                                    <h2>Some Great Movies:</h2>
                                    {<li>{this.state.movies.Title}</li>}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}

export default Title