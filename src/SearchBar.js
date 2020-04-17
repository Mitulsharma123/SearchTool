import React, { Component } from 'react';

class SearchBar extends Component{
    render(){
        return(
            <div className="search-bar">
                <input type = "text" className="input" placeholder="Search.."/>
            </div>
        );
    }
}

export default SearchBar;

