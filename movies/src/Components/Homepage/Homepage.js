import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
//import Image from 'react-bootstrap/Image'\
import Sidebar from './SideBar'

let url = 'https://mernmovies.herokuapp.com/api/collections'

export class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    fetchMovies = () => {
        fetch(`${url}/`)
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
            <div style={{ width: "105%", height: "100vh" , color: "red", paddingTop: 10, textAlign: "center", border: ".5px dotted black" }}><h1>MOVIE.INC</h1>

                <Row style={{ height: "60%", marginTop: 15, color: "black", textAlign: "center"}} noGutters >
                    <Col xs="2" style={{ marginTop: 5, border: "5px solid red", textAlign: "center"}}>
                        <Sidebar selectList={this.selectList} />
                    </Col>
                </Row>

            </div>
        )
    }
}
export default Homepage

//test