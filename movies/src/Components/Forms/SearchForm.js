import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'

export class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ""
            , dropdown: ""
        }
    }

    inputChange = (e) => {
        console.log(e.target.value)
        this.setState({
            input: e.target.value
        })
    }

    dropdownChange = e => {
        this.setState({
            dropdown: e.target.value
        })
    }

   

    submitForm = (e) => {
        e.preventDefault()
        if (this.state.dropdown !== "" && this.state.input !== "") {
            this.props.sendInput(this.state)
            this.props.movies.push(`/api/movies/${this.state.dropdown}${this.state.input}`)
        }
        else { alert("Please select an area from the dropdown and enter the name of the section you would like to search.") }
    }

    render() {
        return (
            
            <Form inline onSubmit={this.submitForm}>
                {/* <Form.Control style={{ margin: 5 , border: "1.5px solid red" }} size="sm" as="select" title="Narrow Your Search" id="basic-nav-dropdown" onChange={this.dropdownChange}>
                    <option>Narrow Your Search</option>
                    <option value="title">Title</option>
                    <option value="rating">Rating</option>
                    <option value="genre">Genre</option>
                    
                </Form.Control> */}
                <Button style={{margin: 5, backgroundColor: "#F5F5F5", color: "#333333", border: "2px solid red"}} size="md" type="submit" >Search</Button>
                <Form.Control style={{margin: 5 , border: "1px solid black" , alignItems: "left"}} placeholder="Search by Title" size="md" type="input" onChange={this.inputChange} />
            </Form>
        )
    }
}
export default withRouter(SearchForm)