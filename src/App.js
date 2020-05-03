import React from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends React.Component {
  state = {
    ninjas : [
      {name: 'Ryu', age: 30, belt: 'black', id: 1},
      {name: 'Yoshi', age: 20, belt: 'green', id: 2},
      {name: 'Crystal', age: 25, belt: 'pink', id: 3}
    ]
  }
  addNewNinja = (newNinja) => {
    newNinja.id = Math.random(); 
    let copyNinjas = [...this.state.ninjas, newNinja]
    this.setState({
      ninjas: copyNinjas
    })
  }

  deleteNinja = (id) => {
    let filteredNinjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: filteredNinjas
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome!!</p>
        <Ninjas deleteNinja={this.deleteNinja} mikes={this.state.ninjas}/>
        <AddNinja addNinja={this.addNewNinja}/>
      </div>
    );
  }  
}

export default App;
