import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.cmpt";
import { SearchBox } from "./components/search-box/search-box.cmpt";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ monster: data }));
  }

  // Function

  handSearch = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { monster, searchField } = this.state;
    const monsterFilter = monster.filter(
      (mons) =>
        mons.name.toLowerCase().includes(searchField.toLowerCase()) ||
        mons.email.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeHolder="Search monster"
          onChangeState={this.handSearch}
        />
        <CardList monsters={monsterFilter} />
      </div>
    );
  }
}

export default App;
