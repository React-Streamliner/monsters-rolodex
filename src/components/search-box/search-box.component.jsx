import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
    render() {
        const {placeholder, onChangeHandler} = this.props;
        return (
            <input 
                className={`search-box ${this.props.className}`}
                type='search' 
                placeholder={placeholder} 
                onChange={onChangeHandler}
            />
        );
    }
}

export default SearchBox;