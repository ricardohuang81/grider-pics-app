import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    //test for myself
    onInputClick() {
        console.log("clickity click click");
    }
    
    // Can also use arrow function inside render within Forme element JSX attribute
    // (event) => this.onFormSubmit(event)
    // Using this.props.onSub from App.js in a Class Component to bring the info from onFormSubmit to use in App.js
    onFormSubmit = event => {
        event.preventDefault();
        console.log("this.state.term:", this.state.term);
        this.props.onSub(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Searcher</label>
                        <input 
                            type="text" 
                            onClick={this.onInputClick} 
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;