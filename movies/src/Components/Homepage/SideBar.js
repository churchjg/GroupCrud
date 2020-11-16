import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'


function Sidebar(props) {
    return (
        <Nav style={{ padding: "50px 40px", backgroundColor: "#F5F5F5" ,   }}>
            <Nav.Item>
                <h4 style={{ textDecoration: "underline" }}>Browse Collections</h4>


                <Nav.Link as={Link} to="/" onClick={() => props}>Home</Nav.Link>
               
                <Nav.Link as={Link} to="/api/movies" onClick={() => props.selectList}>Titles</Nav.Link>
                <Nav.Link as={Link} to="./controllers/collections" onClick={() => props.selectList}>Collections</Nav.Link>
                <Nav.Link as={Link} to="/api/reviews" onClick={() => props.selectList}>Reviews</Nav.Link>

                <h4 style={{ textDecoration: "underline" }}>Advanced Options</h4>
                <Nav.Link as={Link} to="/" >Add a New Collection </Nav.Link>
                <Nav.Link as={Link} to="/" >Update a Collection </Nav.Link>
                <Nav.Link as={Link} to="/" >Delete a Collection </Nav.Link>
                <Nav.Link as={Link} to="/" >Add a New Review</Nav.Link>
                <Nav.Link as={Link} to="/" >Update a Review</Nav.Link>
                <Nav.Link as={Link} to="/" >Delete a Review</Nav.Link>
                </Nav.Item>
        </Nav>
    )
}

export default Sidebar