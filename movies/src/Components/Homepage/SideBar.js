import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'


function Sidebar(props) {
    return (
        <Nav style={{ padding: "50px 40px", backgroundColor: "#F5F5F5" ,   }}>
            <Nav.Item>
                <h4 style={{ textDecoration: "underline" }}>Browse Collections</h4>


                <Nav.Link as={Link} to="/" onClick={() => props.setMealId}>Home</Nav.Link>
                <Nav.Link as={Link} to="/movie/random" onClick={() => props.setMealId}>Pick a Movie For Me!</Nav.Link>
                <Nav.Link as={Link} to="/titles/" onClick={() => props.selectList}>Titles</Nav.Link>
                <Nav.Link as={Link} to="/collections/" onClick={() => props.selectList}>Genres</Nav.Link>
                <Nav.Link as={Link} to="/review/" onClick={() => props.selectList}>By Rating</Nav.Link>

                <h4 style={{ textDecoration: "underline" }}>Advanced Options</h4>
                <Nav.Link as={Link} to="/" >Add a New Movie</Nav.Link>
                <Nav.Link as={Link} to="/" >Update a Movie</Nav.Link>
                <Nav.Link as={Link} to="/" >Delete a Movie</Nav.Link>
                </Nav.Item>
        </Nav>
    )
}

export default Sidebar