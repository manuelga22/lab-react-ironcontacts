import React, { Component } from "react";
import "./App.css";
import Contacts from "./contacts.json";
import Celebrities from "./components/displayCelebs";
//console.log(Contacts.length);
class App extends Component {
  constructor(props) {
    super(props);
    this.celebs = [
      Contacts[0],
      Contacts[1],
      Contacts[2],
      Contacts[3],
      Contacts[4]
    ];
   this.randomsUsed = [];
  }

  deleteCeleb = index => {
    let clone = this.celebs;
    clone.splice(index, 1);
    this.setState({ celebs: clone });
  };

  showCelebs = () => {
  
    return this.celebs.map((Celebs, i) => {
      return (   
      
          <Celebrities
            key={i}
            pictureUrl={Celebs.pictureUrl}
            name={Celebs.name}
            popularity={Celebs.popularity}
           
            delete={() => {
              this.deleteCeleb(i);
            }}
          />
     
      );
    });
 
  };

  addRandomContact = () => {
    
    let random = Math.floor(Math.random() * 200);
    for(let a = 0;a<this.randomsUsed.length;a++){//don't repeat the same celebrity
      if(random == this.randomsUsed[a]){
        console.log('here')
        this.addRandomContact();
      }
    }
    this.randomsUsed.push(random);

    console.log(this.randomsUsed);
    console.log(this.randomsUsed.length);
    this.celebs.unshift(Contacts[random]);
    let clone = [...this.celebs];
  
    this.setState({ celebs: clone });
  };

  sortAlphabetically = () => {
    const clone = this.celebs.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else return 0;
    });

    this.setState({ celebs: clone });
  };

  sortByPopularity = () => {
    const clone = this.celebs.sort(function(a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      } else if (a.popularity < b.popularity) {
        return 1;
      } else return 0;
    });
    this.setState({ celebs: clone });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.sortAlphabetically()}>
          sort alphabetically
        </button>
        <button onClick={() => this.sortByPopularity()}>
          sort by popularity
        </button>
        <button onClick={() => this.addRandomContact()}>Add Random</button>
        <div id = "tableOfContacts">
          <ul>
            <li><h4>Image</h4></li>
            <li><h4>Name</h4></li>
            <li><h4>Popularity</h4></li>
            <li><h4>Action</h4></li>
          </ul>
        </div>
         
       
            {this.showCelebs()}
    
            
   
    
      </div>
    );
  }
}

export default App;
