import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import TitleContainer from '../Homepage/TitleContainer'

export class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titles: []
            , searchTerm: ''
        }
    }

    editSearchTerm = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    dynamicSearch = () => {
        return this.state.titles.filter(title => title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    render() {
        return (

            <Form inline onSubmit={this.submitForm}>

                
                <TitleContainer titles={this.dynamicSearch()} />

                <Button style={{ margin: 5, backgroundColor: "#F5F5F5", color: "#333333", border: "2px solid red" }} size="md" type="submit" >Search</Button>
                <Form.Control style={{ margin: 5, border: "1px solid black", alignItems: "left" }} value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder='Search by Title' />
            </Form>
        )
    }
}
export default withRouter(SearchForm)