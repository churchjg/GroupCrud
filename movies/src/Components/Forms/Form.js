// /*import React, { Component } from 'react'
// import './Form.css'
// import Form from 'react-bootstrap/Form'


// const Forms = (props) => {

//     let classes = ["form-input"]
//     let options = ["Title", "Rating", "Genre"]

//     if (props.medium) {
//         classes.push("medium")
//     }
//     if (props.large) {
//         classes.push("large")
//     }
//     if (props.filterBox) {
//         classes.push("filterBox")
//     }
//     if (props.type === "filter") {
//         classes.push("filter")
//     }
//     if (props.type === "search") {
//         classes.push("search")
//     }
//     if (props.type === "loginForm") {
//         classes.push("login-blank")
//     }
//     if (props.loginFormLarge) {
//         classes.push("loginForm-large")
//     }

//     const loginForm = props => {
//         let formValue = " "
//         let submitLogin = (value) => {
//             formValue = value
//         }

//         return <div className="login-input">
//              <p>{props.placeholder}</p>
//             <loginForm props={props} className={classes.join(" ")} action={submitLogin} onSubmit={submitLogin} />
//             <input type="submit" className="loginForm-button" value={props.buttonText} />
//         </div>
//     }

//     let Change = (evt) => {
//         this.setState({
//             value: evt.target.value
//         })
//     }

//     let Submit = (evt) => {
//         this.setState({
//             value: evt.target.value
//         })
//     }
//     const searchForm = props => {
//         return <search value={props.value} className={classes.join(" ")}>
//             <option className="search">Search</option>
//             <input onChange={Change} onSubmit={Submit}></input>
//         </search>
//     }

//     const filterForm = props => {

//         let options = props.options.map(val => {
//             return <option>{val}</option>
//         })

//         return <filter value={props.value} className={classes.join(" ")}>
//             <option className="filter-default">Filter By:</option>
//             {options}
//         </filter>
//     }

    
//     return (
//         <Forms className="form">
//             {props.type === "loginForm" ? loginForm(props) : null}
//             {props.type === "search" ? searchForm(props) : null}
//             {props.type === "filter" ? filterForm(props) : null}
            
//             {/* //Search */}
//             <Form type="search" placeholder="Search" />
//             <Form type="search" medium placeholder="Search" />
//             <Form type="search" large placeholder="Search" />

//             {/* //Filters */}
//             <Form type="filter" options={options} />
//             <Form type="filter" medium options={options} />
//             <Form type="filter" large options={options} />

//             <Form type="filter" filterBox options={options} />)
//             <Form type="filter" filterBox medium options={options} />
//             <Form type="filter" filterBox large options={options} />



//             {/* //Log In */}
//             <Form type="loginForm" placeholder="UserName" buttonText="Login" medium />
//             <Form type="loginForm" placeholder="UserName" buttonText="Login" loginFormLarge />
//         </Forms>
//     )
    
// }

// export default Forms
