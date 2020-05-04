import React, {Component} from "react";

class ListForm extends Component {
    constructor() {
        super();
        this.state = {
            newItem: ''
        };
    }

    handleChanges = event => {
        this.setState({
            newItem: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({
            newItem: ''
        });
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.newItem}
                    onChange={this.handleChanges}
                    name="item" />
                <button>Add To List</button>
            </form>
        );
    }
}

export default ListForm;