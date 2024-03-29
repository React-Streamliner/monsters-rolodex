import { Component } from "react";
import './card-item.styles.css';

class CardItem extends Component {

    render() {
        const { id, name, email } = this.props.monster;
        return (
            <div key={id} className='card-component'>
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
    }
}

export default CardItem;