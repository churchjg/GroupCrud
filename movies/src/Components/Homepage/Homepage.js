import React, { Component } from 'react'
//import { Container, Col, Row } from 'react-bootstrap'
//import Image from 'react-bootstrap/Image'

let url = ""

export class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }
    render() {
        return (
            <div style={{ color: "red", paddingTop: 10, textAlign: "center" , border: ".5px dotted black"  }}><h1>MOVIE.INC</h1>
            </div>
        )
    }
}
export default Homepage

//test