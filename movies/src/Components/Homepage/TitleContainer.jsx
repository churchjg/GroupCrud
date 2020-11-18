import React, { Component } from 'react'
import SearchTitles from './SearchTitles'

class TitleContainer extends Component {
    render() {
        return (
            <div>
                {this.props.titles.map(title => <SearchTitles title= {title}/>)}
            </div>
        )
    }
}
export default TitleContainer