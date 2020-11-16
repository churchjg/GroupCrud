import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import bgImage from '../../Images/moviereel.jpg'
import SearchForm from '../Forms/SearchForm'
// import Form from '../Forms/Form'



function NavBar(props) {

  
    return (
        <Navbar style={{ height: "100%", paddingLeft: 40, borderBottom: "3px solid #333333", backgroundImage: `url(${bgImage}) `, backgroundPosition: "cover" }} className="justify-content-between">
            <Navbar.Brand as={Link} to="/" style={{ color: "red" }}></Navbar.Brand>
            <Navbar.Text style={{ color: "red", paddingTop: 50, textAlign: "bottom" , opacity: "0" }}><h2>MOVIE.INC</h2></Navbar.Text>

            <SearchForm sendInput={props.sendInput} />

        </Navbar>

    )
}

export default NavBar
