import { Component } from "react";

class SearchBox extends Component {
    render() {
        const {placeholder, onChangeHandler} = this.props;
        return (
            <input 
                className='search-box' 
                type='search' 
                placeholder={placeholder} 
                onChange={onChangeHandler}
            />
        );
    }
}

export default SearchBox;