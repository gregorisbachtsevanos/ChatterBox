import { Component } from 'react';

class SearchBox extends Component {
   render() {
      const { placeholder, className, type, onChangeHandler } = this.props;
      return (
         <input
            placeholder={placeholder}
            className={className}
            type={type}
            onChange={onChangeHandler}
         />
      )
   }
}

export default SearchBox