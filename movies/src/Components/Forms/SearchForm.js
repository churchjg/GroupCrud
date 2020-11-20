// import React, { Component } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

// import { Col, Row, Container } from 'react-bootstrap'


// export class SearchForm extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = { value: '' };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }


//     handleChange(e) {
//         this.setState({ value: e.target.value });
//     }

//     handleSubmit(e) {
//         console.log('A title was submitted: ' + this.state.value);
//         e.preventDefault();
//     }

//     render() {
//         return (

//             <Form onSubmit={this.handleSubmit} style={{ alignItems: "center", textAlign: "center" }}>
//                 <Row style={{ alignItems: "center", textAlign: "center" }}>
//                     <Form.Control style={{ margin: "5px", border: "1px solid black", alignItems: "center" }} input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Search by Title' />
//                     <Button style={{ margin: "5px", marginLeft: "150px", textAlign: "center", backgroundColor: "#F5F5F5", color: "#333333", border: "2.5px solid red" }} size="md" type="submit" >Search</Button>
//                 </Row>
//             </Form>
//         )
//     }
// }

// export default SearchForm