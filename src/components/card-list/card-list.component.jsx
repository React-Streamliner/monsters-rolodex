import './card-list.styles.css';
import CardItem from '../card-item/card-item.component';

const CardList = ({monsters}) => {
    if (monsters.length === 0) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="card-list">
            {monsters.map((monster) => <CardItem key={monster.id} monster={monster}/>)}
        </div>
    );
}

export default CardList;