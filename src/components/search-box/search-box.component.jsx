// import { Component } from 'react'; // for class
import './search-box.styles.css'

const SearchBox = ({ placeholder, className, onChangeHandler }) => { // destructuring from (props)
   return (
      <input
         placeholder={placeholder}
         className={`search-box ${className}`}
         type="search"
         onChange={onChangeHandler}
      />
   )
}

// class SearchBox extends Component {
//    render() {
//       const { placeholder, className, onChangeHandler } = this.props;
//       return (
//          <input
//             placeholder={placeholder}
//             className={`search-box ${className}`}
//             type="search"
//             onChange={onChangeHandler}
//          />
//       )
//    }
// }

export default SearchBox