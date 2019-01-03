import React, { Component } from 'react';

class TodoListTemplate extends Component {
    render() {
        return (
            <div>
                <h2>Today List</h2>
                {this.props.Add}
                {this.props.children}
            </div>
        );
    }
}

export default TodoListTemplate;