import React, { Component } from 'react';
import Modal from './modal'
class List extends Component {
  constructor(props){
    super(props)
    this.state={
      show:false,
      data:{
        artist:[]
      }
    }
  }

  showModal = (data) => {
    this.setState({ show: true,data:data});
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  transform(s){
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    
  
    return mins + ':' + secs;
  }

  render() {
    return (
      <div>
       {this.props.data.map((i,j)=>
        <p className="items" key={j} onClick={()=>{this.showModal(i)}}>
          {i.name}
        </p>
        )}
        <Modal show={this.state.show} handleClose={this.hideModal}>
          
          <div className="artist"> <p>name: </p> <p>{this.state.data.name}</p></div>
          <div className="artist"> <p>artists: </p> {this.state.data.artist.map(i=><p>{i}</p>)}</div>
          <div className="artist"> <p>release date: </p> <p>{this.state.data.release}</p></div>
          <div className="artist"> <p>duration: </p> <p> {this.transform(this.state.data.duration)}</p></div>

          
        </Modal>
      </div>
    );
  }
}

export default List;
