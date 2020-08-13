import React, { Component } from 'react';

export default class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  searchInputHandler = (e) => {
    const inputVal = e.target.value;
    this.setState({
      search: inputVal,
    });
    this.props.handleSearch(inputVal)
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="search"
          value={this.state.search}
          placeholder="Search by name here"
          onChange={this.searchInputHandler}
        />
      </div>
    );
  }
}
