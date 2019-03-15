import React, { Component } from 'react';
import List from './components/list.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[],
      show:[],
      value:""
    }
    this.search=this.search.bind(this);
  }


  componentDidMount() {
    fetch('http://localhost:8110/webapi/')
      .then(response => response.json())
      .then(data => this.setState({ data:data,show:data }));
  }

  search(e){
    console.log(e)
    this.setState({value:e.target.value})
    var searched = this.state.data.filter(i =>i.name.toUpperCase().includes(e.target.value.toUpperCase()) || i.artist.filter(j=>j.toUpperCase().startsWith(e.target.value.toUpperCase())).length )
    this.setState({show: searched});
  }

  render() {
    return (
      <div className="App">
      <header>
        <p>Here</p> 
        <p>the Top 50</p>
        <p>Global songs</p>
      </header>
      <div className="List">
      <input type="text" value={this.state.value} placeholder="search by name or artist" onChange={(e)=>{this.search(e)}}/>
      <List data={this.state.show}/>
      </div>
      
      </div>
    );
  }
}

export default App;
