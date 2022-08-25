import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {

   const [searchField, setSearchField] = useState('')
   const [monsters, setMonsters] = useState([])
   const [filteredMonsters, setFilteredMonsters] = useState(monsters)

   const onSearchChange = (e) => {
      setSearchField(e.target.value.toLocaleUpperCase());
   }

   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((res) => res.json())
         .then((data) => setMonsters(data))
   }, [])

   useEffect(() => {
      const newfilteredMonsters = monsters.filter((monster) => {
         return monster.name.toLocaleUpperCase().includes(searchField);
      });
      setFilteredMonsters(newfilteredMonsters)
   }, [monsters, searchField])

   return (
      <div className="App">
         <h1 className="app-title">Monsters Rolodex</h1>
         <SearchBox
            placeholder="Search"
            className="monsters-search-box"
            onChangeHandler={onSearchChange}
         />
         <CardList monsters={filteredMonsters} />
      </div>
   )
}

// class App extends Component {
//    constructor() {
//       // console.log("constructor");
//       super();

//       this.state = {
//          monsters: [],
//          searchFields: "",
//       };
//    }

//    componentDidMount() {
//       // console.log("componentDidMount");
//       fetch("https://jsonplaceholder.typicode.com/users")
//          .then((res) => res.json())
//          .then((data) =>
//             this.setState(
//                () => {
//                   return { monsters: data };
//                },
//                () => {
//                   // console.log(this.state);
//                }
//             )
//          );
//    }

//    onSearchChange = (e) => {
//       this.setState(() => {
//          return {
//             searchFields: e.target.value.toLocaleUpperCase(),
//          };
//       });
//    };

//    render() {
//       // console.log("render");
//       const { monsters, searchFields } = this.state;
//       const filtedMonsters = monsters.filter((monster) => {
//          return monster.name.toLocaleUpperCase().includes(searchFields);
//       });

//       return (
//          <div className="App">
//             <h1 className="app-title">Monsters Rolodex</h1>
//             <SearchBox
//                placeholder="Search"
//                className="monsters-search-box"
// 					onChangeHandler={this.onSearchChange}
//             />
//             <CardList monsters={filtedMonsters} />
//          </div>
//       );
//    }
// }

export default App;
