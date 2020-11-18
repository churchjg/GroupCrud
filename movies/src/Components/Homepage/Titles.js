import React from 'react';
import axios from 'axios';
import Sidebar from './SideBar'
import { Col, Row, Container } from 'react-bootstrap'

export default class Titles extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lists: [],
            current: null
        }

    }

    async loadLists() {
        const data = await axios("https://mernmovies.herokuapp.com");
        console.log(data.data.data);
        this.setState({ lists: data.data.data });
    }
    loadList(i) {
        this.setState({ current: this.state.lists[i] })
    }

    async deleteList() {

        await axios.delete(`https://mernmovies.herokuapp.com${this.state.current.slug}`);

        this.setState({
            lists: this.state.lists.filter(list => list._id !== this.state.current._id),
            current: null
        });

    }

    componentDidMount() {

        this.loadLists();

    }

    render() {

        if (this.state.current) return (

            <Row style={{ height: "60%", width: "100%", marginTop: 15, color: "black", textAlign: "center" }} noGutters >
                <Col xs="4" style={{ marginTop: 5, border: "5px solid red", textAlign: "center" }}>
                    <Sidebar selectList={this.selectList} />
                </Col>
            <section>

                <div onClick={() => this.setState({current: null})}>
                    <h3>Back</h3>
                </div>

                <div>
                    <h1>Some Top Movies</h1>
                    <li>{this.state.current.title}</li>

                    <div>

                    </div>

                    <div>
                        <button onClick={() => this.deleteList()}>Delete</button>
                    </div>
                </div>

            </section>
            </Row>
        )

        if (!this.state.lists.length) {
            return (
                <section>
                    <p>There are no titles by that name</p>
                </section>
            )
        }

        return (
            <section>
                <h1>Artist Lists</h1>
                {this.state.lists.map((list, i) => (
                    <div key={list.slug} onClick={() => this.loadList(i)}>
                        <h2>{list.name}</h2>
                        <p>{list.description}</p>
                    </div>
                ))}
            </section>
        )


    }

}
