import { Component } from 'react';

class CardList extends Component {
   render(){
      const { monsters } = this.props;
      return (
         <div>
            {monsters.map((monster) => {
               return(
                  <div key={monster.id}>
                     <p>{monster.name}</p>
                  </div>
               )
            })}
         </div>
      )
   }
}

export default CardList