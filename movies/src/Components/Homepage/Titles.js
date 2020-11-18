import React from 'react';
import axios from 'axios';

export default class ArtistLists extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lists: [],
            current: null
        }

    }

    async loadLists() {

        const data = await axios('https://musixjsonapi.herokuapp.com/api/artistlists');

        console.log(data.data.data);

        this.setState({lists: data.data.data});

    }


    loadList(i) {

        this.setState({ current: this.state.lists[i]} )

    }

    async deleteList() {

        await axios.delete(`https://musixjsonapi.herokuapp.com/api/artistlists/${this.state.current.slug}`);

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
            <section>

                <div onClick={() => this.setState({current: null})}>
                    <h3>Back</h3>
                </div>

                <div>
                    <h1>{this.state.current.name}</h1>
                    <p>{this.state.current.description}</p>

                    <div>

                    </div>

                    <div>
                        <button onClick={() => this.deleteList()}>Delete</button>
                    </div>
                </div>

            </section>
        )

        if (!this.state.lists.length) {
            return (
                <section>
                    <p>There are no Artist Lists</p>
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
