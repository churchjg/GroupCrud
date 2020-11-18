import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import SearchForm from '../Forms/SearchForm'


function Sidebar(props) {
    return (
        <Nav style={{ padding: "50px 40px", backgroundColor: "#D3D3D3"}}>

            <Nav.Item>
                <h2 style={{ textDecoration: "underline", marginTop: "50px", marginBottom: "20px" }}>Browse Collections</h2>
                <h5 style={{ textDecoration: "none" }}>
                    <Nav.Link as={Link} to="/" onClick={() => props}>Home</Nav.Link>
                    <Nav.Link as={Link} to="/movies" onClick={() => props.loadList}>Title</Nav.Link>
                    <SearchForm style={{ alignItems: "center", textAlign: "center",  }} onChange={() => props.handleChange} />

                </h5>

                <h2 style={{ textDecoration: "underline" }}>Advanced Options</h2>
                <h5 style={{ textDecoration: "none" }}>
                    <Nav.Link as={Link} to="/collections" >Add a New Collection </Nav.Link>
                    <Nav.Link as={Link} to="/collections/slug" >Update a Collection </Nav.Link>
                    <Nav.Link as={Link} to="/collections/slug" >Delete a Collection </Nav.Link>
                    <Nav.Link as={Link} to="/reviews" >Add a New Review</Nav.Link>
                    <Nav.Link as={Link} to="/reviews/:id" >Update a Review</Nav.Link>
                    <Nav.Link as={Link} to="/reviews/:id" >Delete a Review</Nav.Link>
                </h5>
            </Nav.Item>
        </Nav>
    )
}

export default Sidebar
