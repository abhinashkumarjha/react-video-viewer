import React, { Component } from 'react';
// Functional Component.
const SearchBar = ({videoSearch})=>{
  return (
    <div className="search-bar">
    <input  onChange={(event)=>videoSearch(event.target.value)}/>
    </div>
  )
}

/*// class based components;
class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state= { term: '' }
  }


  render() {
    return (
      <div className="search-bar">
      <input  onChange={(event)=>props.videoSearch(event.target.value)}/>
      </div>
    )
  }
}
*/
export default SearchBar;
