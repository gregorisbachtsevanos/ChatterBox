import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
   constructor() {
      // console.log("constructor");
      super();

      this.state = {
         monsters: [],
         searchFields: "",
      };
   }

   componentDidMount() {
      // console.log("componentDidMount");
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((res) => res.json())
         .then((data) =>
            this.setState(
               () => {
                  return { monsters: data };
               },
               () => {
                  // console.log(this.state);
               }
            )
         );
   }

   onSearchChange = (e) => {
      this.setState(() => {
         return {
            searchFields: e.target.value.toLocaleUpperCase(),
         };
      });
   };

   render() {
      // console.log("render");
      const { monsters, searchFields } = this.state;
      const filtedMonsters = monsters.filter((monster) => {
         return monster.name.toLocaleUpperCase().includes(searchFields);
      });

      return (
         <div className="App">
            <SearchBox
               placeholder="Search"
               className="search-box"
               type="search"
					onChangeHandler={this.onSearchChange}
            />
            <CardList monsters={filtedMonsters} />
         </div>
      );
   }
}

export default App;
