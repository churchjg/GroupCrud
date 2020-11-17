import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import SearchForm from '../Forms/SearchForm'


function Sidebar(props) {
    return (
        <Nav style={{ padding: "50px 40px", backgroundColor: "#F5F5F5", }}>
            <SearchForm style={{ alignItems: "left" }} sendInput={props.sendInput} />
            <Nav.Item>
                <h2 style={{ textDecoration: "underline", marginTop: "50px" }}>Browse Collections</h2>
                <h5 style={{ textDecoration: "none" }}>
                    <Nav.Link as={Link} to="/" onClick={() => props}>Home</Nav.Link>
                    <Nav.Link as={Link} to="/api/movies" onClick={() => props.selectList}>Titles</Nav.Link>
                    <Nav.Link as={Link} to="/api/collections" onClick={() => props.selectList}>Collections</Nav.Link>
                    <Nav.Link as={Link} to="/api/reviews" onClick={() => props.selectList}>Reviews</Nav.Link>
                </h5>

                <h2 style={{ textDecoration: "underline" }}>Advanced Options</h2>
                <h5 style={{ textDecoration: "none" }}>
                    <Nav.Link as={Link} to="/api/collections" >Add a New Collection </Nav.Link>
                    <Nav.Link as={Link} to="/api/collections/slug" >Update a Collection </Nav.Link>
                    <Nav.Link as={Link} to="/api/collections/slug" >Delete a Collection </Nav.Link>
                    <Nav.Link as={Link} to="/" >Add a New Review</Nav.Link>
                    <Nav.Link as={Link} to="/" >Update a Review</Nav.Link>
                    <Nav.Link as={Link} to="/" >Delete a Review</Nav.Link>
                </h5>
            </Nav.Item>
        </Nav>
    )
}

export default Sidebar