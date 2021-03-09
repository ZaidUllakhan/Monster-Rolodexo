import React, { Component } from 'react'; 

import {CardList} from './component/card-list/card-list.component';
import {SearchBox} from './component/Search-Box/search-box.component';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    };
  }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(aaa => this.setState({ monsters: aaa}));
    }

    handleChange = (e) => {
      this.setState({searchField: e.target.value})
    }

  render() {

    const { monsters, searchField} = this.state;
    const FilteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
   
    return (
     <div className="App">
     <h1>Monster Roledexo</h1>

     <SearchBox 
      placeholder="search monsters" 
      handlechange = {this.handleChange}
      />
     <CardList monsters={FilteredMonsters}/>
    
    
     
    
      
             

    </div>


    );
  }
}



export default App;
