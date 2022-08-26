// import { Component } from 'react' ; // for class
import './card.styles.css'

const Card = (props) => { // we could destructuring like ({ monster: {id, name, email} })
   const { id, name, email } = props.monster
   return (
      <div className='card-container' key={id}>
         <img src={`https://robohash.org/${id}?size=180x180`} alt={name} />
         <h2>{name}</h2>
         <p>{email}</p>
      </div>
   )
}

// class Card extends Component {
//    render() {
//       const { id, name, email } = this.props.monster
//       return (
//          <div className='card-container' key={id}>
//             <img src={`https://robohash.org/${id}?size=180x180`} alt={name} />
//             <h2>{name}</h2>
//             <p>{email}</p>
//          </div>
//       )
//    }
// }

export default Card