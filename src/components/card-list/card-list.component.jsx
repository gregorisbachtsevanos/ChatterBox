// import { Component } from 'react'; // for class
import './card-list.styles.css';
import Card from '../card/card.component';


const CardList = ({ monsters }) => {  // destructuring from (props), so we dont have to do: const { monsters } = props;
   return (
      <div className="card-list">
         {monsters.map((monster) => {
            return(
               <Card monster={monster}/>
            )
         })}
      </div>
   )
}

// class CardList extends Component {
//    render(){
//       const { monsters } = this.props;
//       return (
//          <div className="card-list">
//             {monsters.map((monster) => {
//                return(
//                   <Card monster={monster}/>
//                )
//             })}
//          </div>
//       )
//    }
// }

export default CardList