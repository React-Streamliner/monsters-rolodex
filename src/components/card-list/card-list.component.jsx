import { Component } from "react";

class CardList extends Component {

    render() {
        const {monsters} = this.props;
        if (monsters.length === 0) {
            return <h1>Loading...</h1>
        }
        return (
            monsters.map((monster) => {
              return <div key={monster.id}><h1>{monster.name}</h1></div>
            })
        );
    }
}

export default CardList;